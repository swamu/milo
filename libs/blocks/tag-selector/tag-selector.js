import { html, render, useState, useEffect } from '../../deps/htm-preact.js';
import Picker from '../../ui/controls/TagSelectPicker.js';
import { loadCaasTags } from '../caas/utils.js';

async function fetchData(url) {
  const resp = await fetch(url.toLowerCase());

  if (!resp.ok) throw new Error('Network error');

  const json = await resp.json();
  return json;
}

const TagPreview = ({ selectedTags = [] }) => {
  const [copyText, setCopyText] = useState('Copy');

  /* c8 ignore next 10 */
  const handleClick = () => {
    navigator.clipboard?.writeText(selectedTags.join(',')).then(
      () => setCopyText('Copied!'),
      () => setCopyText('Copy Failed'),
    );

    setTimeout(() => {
      setCopyText('Copy');
    }, 2000);
  };

  return html`
    <section class='tag-preview-container'>
      <button disabled=${!selectedTags.length} onClick=${handleClick}>${copyText}</button>
      <div class='tag-preview'>
        ${selectedTags.map((tag) => html`<p>${tag}</p>`)}
      </div>
    </section>
  `;
};

const TagSelector = ({ consumerUrls = [] }) => {
  const [selectorTags, setSelectorTags] = useState({});
  const [options, setOptions] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [optionMap, setOptionMap] = useState();
  const [selected, setSelected] = useState('CaaS');
  const caasTagUrl = 'https://www.adobe.com/chimera-api/tags';

  const getTagTree = (root) => {
    const caaSOptions = Object.entries(root).reduce((opts, [, tag]) => {
      opts[tag.tagID] = {};

      if (Object.keys(tag.tags).length) {
        opts[tag.tagID].children = getTagTree(tag.tags);
      }

      opts[tag.tagID].label = tag.title;
      opts[tag.tagID].path = tag.path.replace('/content/cq:tags/caas/', '');

      return opts;
    }, {});
    return caaSOptions;
  };

  const createOptionMap = (root) => {
    const newOptionMap = {};
    const parseNode = (nodes, parent) => {
      Object.entries(nodes).forEach(([key, val]) => {
        newOptionMap[key] = { ...val };
        if (parent) {
          newOptionMap[key].parent = parent;
        }
        if (val.children) {
          parseNode(val.children, newOptionMap[key]);
        }
      });
    };
    parseNode(root);
    return newOptionMap;
  };

  const splitChildren = (tag, names) => {
    const parts = names.split(' | ');
    parts.reduce((curr, value, i) => {
      const label = value.trim();
      const id = label.toLowerCase();
      if (!curr[id]) {
        curr[id] = {
          label,
          path: id,
        };
      }
      if (i !== parts.length - 1) {
        curr[id].children = curr[id].children || {};
      }
      return curr[id].children || curr;
    }, tag.children);
  };

  const getConsumerTags = (data) => {
    const tags = {};

    data.forEach((item) => {
      if (!item.Name || !item.Type) return;
      const id = item.Type.toLowerCase();
      // make sure the tag exists
      if (!tags[id]) {
        tags[id] = {
          label: item.Type.trim(),
          path: id.trim(),
          children: {},
        };
      }
      // split the item name and add it to the tag tree
      splitChildren(tags[id], item.Name);
    });
    return tags;
  };

  const fetchCasS = async () => {
    const { tags, errorMsg } = await loadCaasTags(caasTagUrl);
    if (errorMsg) window.lana.log(`Tag Selector. Error fetching caas tags: ${errorMsg}`);

    setSelectorTags((prevConsumerTags) => ({ CaaS: tags, ...prevConsumerTags }));
  };

  const fetchConsumer = () => {
    consumerUrls.forEach(({ title, url }) => {
      fetchData(url).then((json) => {
        const tags = getConsumerTags(json.data);
        setSelectorTags((prevConsumerTags) => ({ [title]: tags, ...prevConsumerTags }));
      });
    });
  };

  const loadCaaS = () => {
    const opts = getTagTree(selectorTags.CaaS);
    setOptions(opts);
    if (opts && Object.values(opts).some((value) => typeof value !== 'string')) {
      setOptionMap(createOptionMap(opts));
    } else {
      /* c8 ignore next 2 */
      setOptionMap(opts);
    }
  };

  const loadConsumer = () => {
    if (!selectorTags[selected]) return;
    const opts = selectorTags[selected];
    setOptions(opts);
    if (opts && Object.values(opts).some((value) => typeof value !== 'string')) {
      setOptionMap(createOptionMap(opts));
    } else {
      /* c8 ignore next 2 */
      setOptionMap(opts);
    }
  };

  useEffect(() => {
    fetchCasS();
    fetchConsumer();
  }, []);

  useEffect(() => {
    if (selected === 'CaaS' && selectorTags.CaaS) {
      loadCaaS();
    } else if (selectorTags[selected]) {
      loadConsumer();
    }
  }, [selected, selectorTags]);

  useEffect(() => {
    setSelectedTags([]);
  }, [selected]);

  const toggleTag = (value) => {
    setSelectedTags((tags) => {
      if (tags.includes(value)) {
        return tags.filter((tag) => tag !== value);
      }
      return [...tags, value];
    });
  };

  const setTag = (event) => {
    const tagName = event.target.dataset.tag;
    setSelected(tagName);
  };

  return html`
    <section class="tag-selector-sources">
      <div class="col">
        <div class="tagselect-item ${selected === 'CaaS' ? 'expanded' : ''}">
          <button class="has-children" data-tag="CaaS" onClick=${setTag}>CaaS Tags</button>
        </div>
      </div>
      ${consumerUrls.map(({ title }) => html`
        <div class="col">
          <div class="tagselect-item ${selected === title ? 'expanded' : ''}">
            <button class="has-children" data-tag=${title} onClick=${setTag}>${title}</button>
          </div>
        </div>
      `)}
    </section>
    ${(options && optionMap)
    ? html`<${Picker}
        toggleTag=${toggleTag}
        options=${options}
        optionMap=${optionMap}
        selectedTags=${selectedTags}
      />`
    : html`<div class="tagselect-picker"><div class="spinner"></div></div>`}
    <${TagPreview} selectedTags=${selectedTags} />
  `;
};

export default async function init(el) {
  const children = Array.from(el.querySelectorAll(':scope > div'));
  const consumerUrls = [];
  children.forEach((child) => {
    const title = child.children[0].textContent;
    const url = child.children[1].textContent;
    child.style.display = 'none';
    consumerUrls.push({ title, url });
  });

  render(html`<${TagSelector} consumerUrls=${consumerUrls} />`, el);
}
