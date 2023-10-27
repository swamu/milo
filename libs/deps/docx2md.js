import {toString as $5OpyM$toString} from "mdast-util-to-string";
import {TYPE_HEADER as $5OpyM$TYPE_HEADER, TYPE_BODY as $5OpyM$TYPE_BODY, TYPE_TABLE as $5OpyM$TYPE_TABLE, TYPE_ROW as $5OpyM$TYPE_ROW, TYPE_CELL as $5OpyM$TYPE_CELL} from "@adobe/mdast-util-gridtables";
import {slug as $5OpyM$slug} from "github-slugger";
import $5OpyM$adobemammothlibdocxdocxreaderjs from "@adobe/mammoth/lib/docx/docx-reader.js";
import $5OpyM$adobemammothlibdocxstylemapjs from "@adobe/mammoth/lib/docx/style-map.js";
import {readOptions as $5OpyM$readOptions} from "@adobe/mammoth/lib/options-reader.js";
import {Buffer as $5OpyM$Buffer} from "buffer";
import $5OpyM$yauzl from "yauzl";
import $5OpyM$adobemammothlibpromisesjs from "@adobe/mammoth/lib/promises.js";
import {splitPath as $5OpyM$splitPath, joinPath as $5OpyM$joinPath} from "@adobe/mammoth/lib/zipfile.js";
import $5OpyM$remarkstringify from "remark-stringify";
import {unified as $5OpyM$unified} from "unified";
import $5OpyM$remarkgfm from "remark-gfm";
import {sanitizeHeading as $5OpyM$sanitizeHeading, sanitizeLinks as $5OpyM$sanitizeLinks, sanitizeTextAndFormats as $5OpyM$sanitizeTextAndFormats, suppressSpaceCode as $5OpyM$suppressSpaceCode, imageReferences as $5OpyM$imageReferences, sanitizeFormats as $5OpyM$sanitizeFormats, renderHtmlFormats as $5OpyM$renderHtmlFormats, sanitizeText as $5OpyM$sanitizeText, robustTables as $5OpyM$robustTables, breaksAsSpaces as $5OpyM$breaksAsSpaces} from "@adobe/helix-markdown-support";
import {remarkMatter as $5OpyM$remarkMatter} from "@adobe/helix-markdown-support/matter";
import $5OpyM$adoberemarkgridtables from "@adobe/remark-gridtables";
import $5OpyM$assert from "assert";
import {visit as $5OpyM$visit} from "unist-util-visit";
import $5OpyM$adobehelixsharedprocessqueue from "@adobe/helix-shared-process-queue";
import {find as $5OpyM$find} from "unist-util-find";

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable no-param-reassign */ 
/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1c0ab6d29c9a3a0d$var$unknown(h, node) {
    if (node.value) return h("text", node.value);
    return undefined;
}
function $1c0ab6d29c9a3a0d$export$2e2bcd8739ae039(h, node, parent, siblings) {
    const fn = h.handlers[node.type] || $1c0ab6d29c9a3a0d$var$unknown;
    return fn(h, node, parent, siblings);
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $d4208ceee60621cb$export$2e2bcd8739ae039(h, node) {
    if (node.breakType === "line") return h("break", "\n");
    return h("thematicBreak");
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $cf824c833d869d4c$export$2e2bcd8739ae039(h, node) {
    const props = {
        type: "image",
        url: "",
        alt: (node.altText || "").replace(/^(?:[\t ]*(?:\r?\n|\r))+/gm, "")
    };
    // only add title if it's different than the alt text.
    if (node.title && node.title !== node.altText) props.title = node.title;
    if (node.read) {
        // we set the read function as non-enumerable, so that inspect doesn't trip over it.
        Object.defineProperty(props, "read", {
            value: node.read,
            enumerable: false
        });
        props.contentType = node.contentType;
    }
    return props;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $9f8e3f89e5c33c21$export$2e2bcd8739ae039(h, parent) {
    const nodes = parent.children || [];
    let values = [];
    nodes.forEach((node)=>{
        const result = (0, $1c0ab6d29c9a3a0d$export$2e2bcd8739ae039)(h, node, parent, values);
        if (result) values = values.concat(result);
    });
    return values;
}


function $89386095cccb738c$export$2e2bcd8739ae039(h, node) {
    const nodes = (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node);
    if (!nodes.length) return null;
    const link = h("link", {
        url: node.href || "",
        title: node.title
    }, nodes);
    // document internal links will have an `anchor` property and are managed as bookmarks
    // after the document is processed, the uris will be adjusted to point to the correct bookmark id.
    if (node.anchor) {
        // only bookmark links have anchors
        const bm = h.getBookmark(node.anchor);
        bm.links.push(link);
    }
    return link;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $ed4d6e892180f51a$var$HEADING_MAP = {
    Heading1: 1,
    Heading1Char: 1,
    Heading2: 2,
    Heading2Char: 2,
    Heading3: 3,
    Heading3Char: 3,
    Heading4: 4,
    Heading4Char: 4,
    Heading5: 5,
    Heading5Char: 5,
    Heading6: 6,
    Heading6Char: 6,
    Heading7: 7,
    Heading7Char: 7,
    Heading8: 8,
    Heading8Char: 8,
    "heading 1": 1,
    "heading 2": 2,
    "heading 3": 3,
    "heading 4": 4,
    "heading 5": 5,
    "heading 6": 6,
    "heading 7": 7,
    "heading 8": 8
};
function $ed4d6e892180f51a$var$getHeadingDepth(node) {
    const { styleId: styleId, styleName: styleName } = node;
    if (styleId in $ed4d6e892180f51a$var$HEADING_MAP) return $ed4d6e892180f51a$var$HEADING_MAP[styleId];
    if (styleName in $ed4d6e892180f51a$var$HEADING_MAP) return $ed4d6e892180f51a$var$HEADING_MAP[styleName];
    return 0;
}
function $ed4d6e892180f51a$var$isListParagraph(node) {
    const { styleId: styleId, styleName: styleName, numbering: numbering } = node;
    return styleId === "ListParagraph" || styleName && styleName.toLowerCase() === "list paragraph" || numbering && "numId" in numbering;
}
function $ed4d6e892180f51a$var$isCodeBlock(node) {
    const { styleId: styleId, styleName: styleName } = node;
    if (styleId === "CodeBlock") return true;
    return styleName && styleName.toLowerCase() === "code block";
}
function $ed4d6e892180f51a$var$isBlockquote(node) {
    const { styleId: styleId, styleName: styleName } = node;
    if (styleId === "Quote") return true;
    return styleName && styleName.toLowerCase() === "quote";
}
function $ed4d6e892180f51a$var$findFrom(nodes, start, pred) {
    let idx = start;
    while(idx < nodes.length){
        if (pred(nodes[idx])) return idx;
        idx += 1;
    }
    return -1;
}
/**
 * For each paragraph, check if there is an (inlinecode br+ inlincode) sequence and promote them
 * to codeblocks at the container level.
 * @param ret
 */ function $ed4d6e892180f51a$var$collapseInlineCode(ret, prev) {
    for(let p = 0; p < ret.length; p += 1){
        const { type: type, children: children } = ret[p];
        if (type === "paragraph") {
            for(let i = 0; i < children.length; i += 1){
                const next = $ed4d6e892180f51a$var$findFrom(children, i, (n)=>n.type === "inlineCode");
                if (next < 0) break;
                // there should be at least 3 nodes remaining, otherwise we keep the inline code
                if (children.length - next < 3) break;
                // if previous node is a break, this is might be the start of a code block
                if (next === 0 || children[next - 1].type === "break") {
                    // find first non codeish
                    const last = $ed4d6e892180f51a$var$findFrom(children, next + 1, (n)=>n.type !== "inlineCode" && n.type !== "break");
                    if (last < 0 || children[last - 1].type === "break") {
                        // detected a codeblock... split the paragraph
                        if (next > 0) {
                            // move first chunk to new paragraph
                            const kids = children.splice(0, next);
                            while(kids[kids.length - 1]?.type === "break")kids.pop();
                            ret.splice(p, 0, {
                                type: "paragraph",
                                children: kids
                            });
                            p += 1;
                        }
                        if (last < 0) {
                            // entire paragraph is code block
                            ret.splice(p, 1, {
                                type: "code",
                                value: (0, $5OpyM$toString)(ret[p]).trimEnd()
                            });
                            break;
                        }
                        // create code block
                        const codeblock = last < 0 ? children : children.splice(0, last - next);
                        ret.splice(p, 0, {
                            type: "code",
                            value: (0, $5OpyM$toString)({
                                children: codeblock
                            }).trimEnd()
                        });
                        p += 1;
                        i = -1;
                    } else // look for more
                    i = last;
                } else // otherwise look for more
                i = next;
            }
            // merge with previous if needed
            if (children.length && children.findIndex((n)=>n.type !== "inlineCode" && n.type !== "break") < 0) {
                // eslint-disable-next-line no-param-reassign
                ret[p].singleLineCode = true;
                if (p === 0 && prev.singleLineCode) {
                    if (prev.type === "paragraph") {
                        // eslint-disable-next-line no-param-reassign
                        prev.type = "code";
                        // eslint-disable-next-line no-param-reassign
                        prev.value = `${(0, $5OpyM$toString)(prev)}\n${(0, $5OpyM$toString)(ret[p])}`;
                        // eslint-disable-next-line no-param-reassign
                        delete prev.children;
                    } else // eslint-disable-next-line no-param-reassign
                    prev.value += `\n${(0, $5OpyM$toString)(ret[p])}`;
                    ret.splice(p, 1);
                    p -= 1;
                }
            }
        }
    }
}
function $ed4d6e892180f51a$export$2e2bcd8739ae039(h, node, parent, siblings) {
    const { children: children } = node;
    const nodes = (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node);
    if (children && children.length !== 0 && nodes.length === 0) return undefined;
    // check for list
    const [lists] = h.listContainers;
    if ($ed4d6e892180f51a$var$isListParagraph(node)) {
        const numbering = node.numbering || {};
        const { numId: numId = 0, isOrdered: isOrdered = false, level: level = "0" } = numbering;
        const lvl = Number.parseInt(level, 10);
        let result = null;
        const listProps = {
            ordered: isOrdered,
            spread: false,
            level: lvl
        };
        // find correct parent
        let tail;
        while(lists.length > 0){
            tail = lists.pop();
            if (tail.ordered !== isOrdered && tail.level === lvl) tail = null;
            else if (lists.length <= lvl) break;
            tail = null;
        }
        if (!tail) {
            tail = h("list", listProps, []);
            result = tail;
        }
        lists.push(tail);
        while(lists.length <= lvl){
            const newList = h("list", listProps, []);
            if (tail.children.length > 0) // append new list to end of the last list item
            tail.children[tail.children.length - 1].children.push(newList);
            else tail.children.push({
                type: "listItem",
                spread: false,
                children: [
                    newList
                ]
            });
            tail = newList;
            lists.push(tail);
        }
        const listItem = {
            type: "listItem",
            spread: false,
            children: [
                h("paragraph", {}, nodes)
            ]
        };
        // track numbering per id and level
        if (isOrdered) {
            let numInfo = h.numbering[numId];
            if (!numInfo) {
                numInfo = {
                    levels: {}
                };
                // eslint-disable-next-line no-param-reassign
                h.numbering[numId] = numInfo;
            }
            let lvlInfo = numInfo.levels[level];
            if (!lvlInfo) {
                lvlInfo = {
                    num: 1
                };
                numInfo.levels[level] = lvlInfo;
            }
            listItem.bullet = `${lvlInfo.num}.`;
            lvlInfo.num += 1;
        }
        tail.children.push(listItem);
        return result;
    }
    // clear lists list marker
    // eslint-disable-next-line no-param-reassign
    h.listContainers[0] = [];
    // check for heading
    let depth = $ed4d6e892180f51a$var$getHeadingDepth(node);
    if (!depth) {
        // if any of the child nodes is a heading (or heading char),
        // turn the entire paragraph into a heading
        const childHeading = children.find($ed4d6e892180f51a$var$getHeadingDepth);
        if (childHeading) depth = $ed4d6e892180f51a$var$getHeadingDepth(childHeading);
    }
    if (depth) {
        // check if no --- in heading
        if ((0, $5OpyM$toString)(nodes).trim() === "---") return h("thematicBreak");
        const heading = h("heading", {
            depth: depth
        }, nodes);
        // check bookmark children (could have multiple)
        for(let idx = 0; idx < nodes.length; idx += 1){
            const child = nodes[idx];
            if (child.type === "bookmark") {
                // set the bookmark target to this heading and remove the child
                child.bookmark.target = heading;
                nodes.splice(idx, 1);
                idx -= 1;
            }
        }
        return heading;
    }
    // check for codeblock
    const prev = siblings.length > 0 ? siblings[siblings.length - 1] : {};
    if ($ed4d6e892180f51a$var$isCodeBlock(node)) {
        const text = (0, $5OpyM$toString)({
            children: nodes
        });
        // check if previous sibling was code block
        if (prev.type === "code") {
            // eslint-disable-next-line no-param-reassign
            prev.value += `\n${text}`;
            return undefined;
        }
        return h("code", text);
    }
    // merge consecutive text blocks
    for(let i = 0; i < nodes.length - 1; i += 1){
        const curr = nodes[i];
        const next = nodes[i + 1];
        if (curr.type === "text" && next.type === "text") {
            curr.value += next.value;
            nodes.splice(i + 1, 1);
            i -= 1;
        }
    }
    // check for thematicBreaks and frontmatter. they need to be block elements
    const ret = [];
    let prevBreak;
    let idx = nodes.findIndex((n)=>(0, $5OpyM$toString)(n).trim() === "---");
    while(idx >= 0){
        const brk = h("thematicBreak");
        // remove the nodes up until the '---'
        const removed = nodes.splice(0, idx);
        // if last element is a break, ignore it.
        if (removed.length && removed[removed.length - 1].type === "break") {
            brk.breakBefore = true;
            removed.pop();
        }
        // remove '---'
        nodes.splice(0, 1);
        // also check if element following is a break
        if (nodes.length && nodes[0].type === "break") {
            brk.breakAfter = true;
            nodes.splice(0, 1);
        }
        // if we had a previous thematic break, and all the text in between looks like yaml, then
        // create a frontmatter block
        if (prevBreak && prevBreak.breakAfter && brk.breakBefore) {
            const src = (0, $5OpyM$toString)({
                children: removed
            });
            prevBreak.type = "yaml";
            prevBreak.value = src;
            prevBreak = null;
        } else {
            // else add the removed as a paragraph
            if (removed.length) ret.push(h("paragraph", removed));
            // and append the thematic break
            ret.push(brk);
            prevBreak = brk;
        }
        idx = nodes.findIndex((n)=>n.type === "text" && n.value === "---");
    }
    // handle remaining nodes
    if (nodes.length) {
        // avoid paragraphs with just a break
        if (nodes.length === 1 && nodes[0].type === "break") nodes.splice(0, 1);
        ret.push(h("paragraph", nodes));
    }
    // for each paragraph, find groups of inline code that could form a code block
    $ed4d6e892180f51a$var$collapseInlineCode(ret, prev);
    // check for block quote
    if ($ed4d6e892180f51a$var$isBlockquote(node)) return h("blockquote", ret);
    return ret;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $36f5bb6bddcde34d$export$2e2bcd8739ae039(h, node) {
    return h("root", (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node));
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $0cb32fc0210c78fd$var$gridTable(h, node) {
    let rows = (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node);
    if (rows[0]?.isHeader) {
        const header = [];
        while(rows[0]?.isHeader){
            const row = rows.shift();
            delete row.isHeader;
            header.push(row);
        }
        rows = [
            h((0, $5OpyM$TYPE_HEADER), header),
            h((0, $5OpyM$TYPE_BODY), rows)
        ];
    }
    return h((0, $5OpyM$TYPE_TABLE), rows);
}
function $0cb32fc0210c78fd$export$2e2bcd8739ae039(h, node) {
    if (h.gridtables) return $0cb32fc0210c78fd$var$gridTable(h, node);
    const nodes = (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node);
    // get alignment of first row, if any
    const align = nodes.length === 0 ? [] : nodes[0].children.map((c)=>c.align === "left" ? null : c.align);
    return h("table", {
        align: align
    }, nodes);
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $7f2a1a86944a06fe$var$gridTableRow(h, node) {
    const props = {};
    if (node.isHeader) props.isHeader = true;
    return h((0, $5OpyM$TYPE_ROW), props, (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node));
}
function $7f2a1a86944a06fe$export$2e2bcd8739ae039(h, node) {
    if (h.gridtables) return $7f2a1a86944a06fe$var$gridTableRow(h, node);
    return h("tableRow", (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node));
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $2547b6bdc701de47$var$V_ALIGN = {
    top: "",
    center: "middle",
    bottom: "bottom"
};
const $2547b6bdc701de47$var$H_ALIGN = {
    left: "",
    right: "right",
    center: "center",
    distribute: "justify",
    justify: "justify",
    both: "justify"
};
function $2547b6bdc701de47$var$gridTableCell(h, node) {
    const props = {};
    if (node.children.length > 0) props.align = $2547b6bdc701de47$var$H_ALIGN[node.children[0].alignment];
    props.valign = $2547b6bdc701de47$var$V_ALIGN[node.verticalAlignment];
    if (node.rowSpan > 1) props.rowSpan = node.rowSpan;
    if (node.colSpan > 1) props.colSpan = node.colSpan;
    h.listContainers.unshift([]);
    const c = h((0, $5OpyM$TYPE_CELL), props, (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node));
    h.listContainers.shift();
    return c;
}
function $2547b6bdc701de47$export$2e2bcd8739ae039(h, node) {
    if (h.gridtables) return $2547b6bdc701de47$var$gridTableCell(h, node);
    // remember alignment for table
    const props = {};
    if (node.children.length > 0) props.align = node.children[0].alignment;
    if (node.rowSpan > 1) props.rowSpan = node.rowSpan;
    if (node.colSpan > 1) props.colSpan = node.colSpan;
    h.listContainers.unshift([]);
    const c = h("tableCell", props, (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node));
    h.listContainers.shift();
    return c;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $080702f11b88d0f3$export$2e2bcd8739ae039(h, node) {
    return node;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

/**
 * Some Monospace fonts
 */ const $a4280eac794c11e9$var$CODE_FONTS = {
    "Courier New": true,
    "Source Code Pro": true,
    VT323: true,
    Consolas: true,
    Courier: true,
    "Nanum Gothic Coding": true,
    Cousine: true
};
/**
 * Checks if the font specified by the text style is a font used to format code.
 * @param {string} fontFamily
 * @returns {boolean} {@code true} if the font is a code font.
 */ function $a4280eac794c11e9$var$isCodeFont(fontFamily) {
    if (!fontFamily) return false;
    return fontFamily in $a4280eac794c11e9$var$CODE_FONTS || fontFamily.match(/\sMono/);
}
function $a4280eac794c11e9$var$isInlineCode(node) {
    return node.styleId === "InlineCode" || $a4280eac794c11e9$var$isCodeFont(node.font);
}
function $a4280eac794c11e9$export$2e2bcd8739ae039(h, node, parent, siblings) {
    const { children: children } = node;
    const nodes = (0, $9f8e3f89e5c33c21$export$2e2bcd8739ae039)(h, node);
    if (children && children.length !== 0 && nodes.length === 0) return undefined;
    if ($a4280eac794c11e9$var$isInlineCode(node)) {
        const text = (0, $5OpyM$toString)({
            children: nodes
        });
        const lines = text.split(/(\n)/);
        const prev = siblings.length > 0 ? siblings[siblings.length - 1] : {};
        while(lines.length > 0 && lines[0] !== "\n" && prev.type === "inlineCode")prev.value += lines.shift();
        return lines.filter((value)=>!!value).map((value)=>({
                type: value === "\n" ? "break" : "inlineCode",
                value: value
            }));
    }
    let result = nodes;
    if (node.verticalAlignment === "superscript") result = [
        h("superscript", result)
    ];
    if (node.verticalAlignment === "subscript") result = [
        h("subscript", result)
    ];
    if (node.isUnderline && node.styleId !== "Hyperlink") result = [
        h("underline", result)
    ];
    if (node.isBold) result = [
        h("strong", result)
    ];
    if (node.isItalic) result = [
        h("emphasis", result)
    ];
    if (node.isStrikethrough) result = [
        h("delete", result)
    ];
    return result;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Bookmarks are inserted by word when one creates a document internal link. At this point they
 * are just remembered. If they are a child of a heading node it will later be adjusted to
 * reflect the expected ID of that heading (by slugging the heading text). if they are just normal
 * paragraph bookmarks, they will later be turned into an anchor link.
 */ function $bbc2c0627318a374$export$2e2bcd8739ae039(h, node) {
    const bm = h.getBookmark(node.name);
    if (bm.target) {
        // eslint-disable-next-line no-console
        console.warn(`bookmark ${node.name} is already defined`);
        return null;
    }
    bm.target = h("bookmark", node.name);
    // do not enumerate, so that it doesn't trip inspect
    Object.defineProperty(bm.target, "bookmark", {
        enumerable: false,
        value: bm
    });
    return bm.target;
}


var $e6d25ea3d738ae70$export$2e2bcd8739ae039 = {
    document: $36f5bb6bddcde34d$export$2e2bcd8739ae039,
    text: $080702f11b88d0f3$export$2e2bcd8739ae039,
    run: $a4280eac794c11e9$export$2e2bcd8739ae039,
    paragraph: $ed4d6e892180f51a$export$2e2bcd8739ae039,
    break: (0, $d4208ceee60621cb$export$2e2bcd8739ae039),
    hyperlink: $89386095cccb738c$export$2e2bcd8739ae039,
    table: $0cb32fc0210c78fd$export$2e2bcd8739ae039,
    tableRow: $7f2a1a86944a06fe$export$2e2bcd8739ae039,
    tableCell: $2547b6bdc701de47$export$2e2bcd8739ae039,
    image: $cf824c833d869d4c$export$2e2bcd8739ae039,
    bookmarkStart: $bbc2c0627318a374$export$2e2bcd8739ae039
};


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
class $e52560b7e17896c3$export$2e2bcd8739ae039 {
    constructor(){
        this.occurrences = {};
    }
    /**
   * Generate a unique slug.
   * @param  {string} value String of text to slugify
   * @return {string}       A unique slug string
   */ slug(value) {
        let id = (0, $5OpyM$slug)(value)// remove leading numbers
        .replace(/^\d+-+/, "");
        // resolve collisions
        const original = id;
        while(id in this.occurrences){
            this.occurrences[original] += 1;
            id = `${original}-${this.occurrences[original]}`;
        }
        this.occurrences[id] = 0;
        return id;
    }
}


async function $626ebda5a56eaa96$export$2e2bcd8739ae039(tree, opts = {}) {
    const byId = {};
    const h = (type, props, children)=>{
        if (!children && (typeof props === "string" || typeof props === "object" && "length" in props)) {
            children = props;
            props = {};
        }
        const result = {
            type: type,
            ...props
        };
        if (typeof children === "string") result.value = children;
        else if (children) result.children = children;
        return result;
    };
    h.nodeById = byId;
    h.baseFound = false;
    h.frozenBaseUrl = null;
    h.handlers = (0, $e6d25ea3d738ae70$export$2e2bcd8739ae039);
    h.numbering = {};
    h.gridtables = opts.gridtables;
    h.bookmarks = {};
    /** @type {ListContainers} */ h.listContainers = [
        []
    ];
    /**
   * @param {string} name
   * @returns {Bookmark}
   */ h.getBookmark = (name)=>{
        let bm = h.bookmarks[name];
        if (!bm) {
            bm = {
                name: name,
                target: null,
                links: []
            };
            h.bookmarks[name] = bm;
        }
        return bm;
    };
    const mdast = (0, $1c0ab6d29c9a3a0d$export$2e2bcd8739ae039)(h, tree, null);
    // process bookmarks. note that we _should_ re-slug them after the headings are sanitized in
    // mdast2md. another option would be to keep the `bookmark` nodes in the mdast and only
    // process them in mdast2md. but then, the dast2mdast would produce non standard mdast.
    const bookmarks = Object.values(h.bookmarks);
    if (!bookmarks.length) return mdast;
    const slugger = new (0, $e52560b7e17896c3$export$2e2bcd8739ae039)();
    for (const bm of bookmarks){
        if (!bm.target) {
            if (bm.name !== "_top") continue;
            bm.id = "";
        } else if (bm.target.type === "heading") {
            // if heading, create an ID from its text
            if (!bm.target.id) {
                const text = (0, $5OpyM$toString)(bm.target).trim();
                bm.target.id = slugger.slug(text || "heading");
            }
            bm.id = bm.target.id;
        } else if (bm.links.length) {
            // create an anchor node for non-heading bookmarks
            bm.id = slugger.slug("bookmark");
            bm.target.type = "html";
            bm.target.value = `<a id="${bm.id}"></a>`;
        } else {
            // remove bookmark node if no link is pointing to it
            bm.target.type = "text";
            bm.target.value = "";
        }
        // adjust all links uris to the id
        for (const link of bm.links)link.url = `#${bm.id}`;
    }
    return mdast;
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable no-param-reassign */ 


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



var $b71625d4c5e63fc5$require$Buffer = $5OpyM$Buffer;
function $b71625d4c5e63fc5$export$94ea64f322e5a37c(arrayBuffer) {
    const { resolve: resolve, reject: reject, promise: promise } = (0, $5OpyM$adobemammothlibpromisesjs).defer();
    (0, $5OpyM$yauzl).fromBuffer(arrayBuffer, {
        lazyEntries: false
    }, (err, zipFile)=>{
        if (err) {
            reject(err);
            return;
        }
        const entries = new Map();
        // add entries to internal dictionary
        zipFile.on("entry", async (entry)=>{
            entries.set(entry.fileName, entry);
        });
        function exists(name) {
            return entries.has(name);
        }
        function read(name, encoding, asContentSource) {
            const entry = entries.get(name);
            if (!entry) return (0, $5OpyM$adobemammothlibpromisesjs).reject(Error(`No such file ${name}`));
            const { resolve: resolve2, reject: reject2, promise: promise2 } = (0, $5OpyM$adobemammothlibpromisesjs).defer();
            const buffers = [];
            zipFile.openReadStream(entry, (error, readStream)=>{
                if (error) {
                    reject2(error);
                    return;
                }
                if (asContentSource) {
                    resolve2({
                        stream: readStream,
                        size: entry.uncompressedSize
                    });
                    return;
                }
                readStream.on("data", (chunk)=>{
                    buffers.push(chunk);
                });
                readStream.on("end", ()=>{
                    const data = $b71625d4c5e63fc5$require$Buffer.concat(buffers);
                    if (encoding) resolve2(data.toString(encoding));
                    else resolve2(data);
                });
            });
            return promise2;
        }
        function write() {
            throw Error("no supported");
        }
        function toBuffer() {
            throw Error("no supported");
        }
        // once all entries arrived, resolve the promise with the API
        zipFile.on("end", ()=>{
            resolve({
                exists: exists,
                read: read,
                write: write,
                toBuffer: toBuffer
            });
        });
    });
    return promise;
}
var $b71625d4c5e63fc5$export$2e2bcd8739ae039 = {
    openArrayBuffer: $b71625d4c5e63fc5$export$94ea64f322e5a37c,
    splitPath: $5OpyM$splitPath,
    joinPath: $5OpyM$joinPath
};


async function $35ec8e33fdfe49b8$export$2e2bcd8739ae039(input, options = {}) {
    options = (0, $5OpyM$readOptions)(options);
    const result = await (0, $b71625d4c5e63fc5$export$94ea64f322e5a37c)(input).tap((docxFile)=>(0, $5OpyM$adobemammothlibdocxstylemapjs).readStyleMap(docxFile).then((styleMap)=>{
            options.embeddedStyleMap = styleMap;
        })).then((docxFile)=>(0, $5OpyM$adobemammothlibdocxdocxreaderjs).read(docxFile, input).then((documentResult)=>documentResult.map(options.transformDocument)));
    return result.value;
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable no-param-reassign,no-console */ 





/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable no-param-reassign */ 



var $4f2cbef753d40575$require$Buffer = $5OpyM$Buffer;
/**
 * @typedef ContentSource
 * @param {stream.Readable} stream The read stream
 * @param {number} size Size of the content
 */ /**
 * Gets the external azure or media resource for the given image buffer.
 *
 * @param {MediaHandler} [handler] The blob handler
 * @param {Buffer|ContentSource} data The buffer or content source of the image data
 * @param {string} contentType Content type of the data.
 * @param {string} source the source document
 * @returns {MediaResource} The blob
 */ async function $4f2cbef753d40575$var$getBlob(handler, data, contentType, source) {
    if (!data) return null;
    if (!handler) {
        (0, $5OpyM$assert)(data instanceof $4f2cbef753d40575$require$Buffer, "expected buffer to be a Buffer");
        return {
            uri: `data:${contentType};base64,${data.toString("base64")}`,
            contentType: contentType
        };
    }
    const blob = data instanceof $4f2cbef753d40575$require$Buffer ? handler.createMediaResource(data, data.length, contentType, source) : await handler.createMediaResourceFromStream(data.stream, data.size, contentType, source);
    const exists = await handler.checkBlobExists(blob);
    if (!exists) await handler.upload(blob);
    return blob;
}
async function $4f2cbef753d40575$export$2e2bcd8739ae039(log, tree, blobHandler, source) {
    // gather all image nodes
    const images = [];
    (0, $5OpyM$visit)(tree, (node, index, parent)=>{
        if (node.type === "image") {
            if (node.read && typeof node.read === "function" || node.url) images.push({
                node: node,
                index: index,
                parent: parent
            });
        }
        return (0, $5OpyM$visit).CONTINUE;
    });
    // upload images
    await (0, $5OpyM$adobehelixsharedprocessqueue)(images, async ({ node: node })=>{
        let blob;
        // process inlined images first
        if (node.read) try {
            const data = await node.read(null, !!blobHandler);
            blob = await $4f2cbef753d40575$var$getBlob(blobHandler, data, node.contentType, source);
        } catch (e) {
            log.error("Error reading blob data:", e.message);
            node.url = "about:error";
            return;
        }
        if (blob) node.url = blob.uri;
    }, 8);
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $7fd1a11a8051adbd$export$2e2bcd8739ae039(tree) {
    (0, $5OpyM$visit)(tree, (node, index, parent)=>{
        const { children: siblings = [] } = parent || {};
        const prev = siblings[index - 1];
        if (index > 0 && prev.type === "paragraph" && prev.children && prev.children[0] && node.type === "paragraph" && node.children && node.children[0]) {
            // find link
            const link = (0, $5OpyM$find)(prev, (n)=>n.type === "link");
            if (!link) return (0, $5OpyM$visit).CONTINUE;
            // get alt text
            const img = (0, $5OpyM$find)(node, (n)=>n.type === "image");
            if (!img) return (0, $5OpyM$visit).CONTINUE;
            const { alt: alt } = img;
            if (!alt) return (0, $5OpyM$visit).CONTINUE;
            // get link text
            const text = (0, $5OpyM$find)(link, (n)=>n.type === "text");
            if (!text) return (0, $5OpyM$visit).CONTINUE;
            const { value: value } = text;
            if (!value) return (0, $5OpyM$visit).CONTINUE;
            // check if alt text contains link text (be very restrictive to avoid false positives)
            if (alt !== `Video titled: ${value}`) return (0, $5OpyM$visit).CONTINUE;
            // remove image paragraph and ensure that link is only child
            siblings.splice(index, 1);
            link.children = [
                {
                    type: "text",
                    value: link.url
                }
            ];
            prev.children = [
                link
            ];
            return index - 1;
        }
        return (0, $5OpyM$visit).CONTINUE;
    });
    return tree;
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * @param {State} state
 * @returns {Exclude<Options['listItemIndent'], null | undefined>}
 */ function $5a2692d9080269e2$export$2d5358b63da92261(state) {
    const style = state.options.listItemIndent || "one";
    if (style !== "tab" && style !== "one" && style !== "mixed") throw new Error(`Cannot serialize items with \`${style}\` for \`options.listItemIndent\`, expected \`tab\`, \`one\`, or \`mixed\``);
    return style;
}
function $5a2692d9080269e2$export$7425517207a4d0ae(state) {
    const marker = state.options.bullet || "*";
    if (marker !== "*" && marker !== "+" && marker !== "-") throw new Error(`Cannot serialize items with \`${marker}\` for \`options.bullet\`, expected \`*\`, \`+\`, or \`-\``);
    return marker;
}
function $5a2692d9080269e2$export$76c7e83ecc9cdf05(node, parent, state, info) {
    const listItemIndent = $5a2692d9080269e2$export$2d5358b63da92261(state);
    let bullet = state.bulletCurrent || $5a2692d9080269e2$export$7425517207a4d0ae(state);
    // Add the marker value for ordered lists.
    if (parent && parent.type === "list" && parent.ordered) {
        if (node.bullet !== undefined) bullet = node.bullet;
        else bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
    }
    let size = bullet.length + 1;
    if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) size = Math.ceil(size / 4) * 4;
    /** @type {Map} */ function map(line, index, blank) {
        if (index) return (blank ? "" : " ".repeat(size)) + line;
        return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
    }
    const tracker = state.createTracker(info);
    tracker.move(bullet + " ".repeat(size - bullet.length));
    tracker.shift(size);
    const exit = state.enter("listItem");
    const value = state.indentLines(state.containerFlow(node, tracker.current()), map);
    exit();
    return value;
}


function $4cd0011159096aec$var$toMarkdown() {
    return {
        handlers: {
            listItem: $5a2692d9080269e2$export$76c7e83ecc9cdf05
        }
    };
}
function $4cd0011159096aec$export$2e2bcd8739ae039(options) {
    const data = this.data();
    function add(field, value) {
        /* c8 ignore next 2 */ if (data[field]) data[field].push(value);
        else data[field] = [
            value
        ];
    }
    // add('micromarkExtensions', syntax(options));
    // add('fromMarkdownExtensions', fromMarkdown(options));
    add("toMarkdownExtensions", $4cd0011159096aec$var$toMarkdown(options));
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Renders special html only format.
 */ function $7ea787831f2eeda5$var$format(tagName) {
    const tagOpen = `<${tagName}>`;
    const tagClose = `</${tagName}>`;
    /**
   * @param {Node} node
   * @param {Parents | undefined} _
   * @param {State} state
   * @param {Info} info
   * @returns {string}
   */ return (node, _, state, info)=>{
        const exit = state.enter("html");
        const tracker = state.createTracker(info);
        let value = tracker.move(tagOpen);
        value += tracker.move(state.containerPhrasing(node, {
            before: value,
            after: tagOpen,
            ...tracker.current()
        }));
        value += tracker.move(tagClose);
        exit();
        return value;
    };
}
function $7ea787831f2eeda5$export$2e2bcd8739ae039() {
    return {
        handlers: {
            subscript: $7ea787831f2eeda5$var$format("sub"),
            superscript: $7ea787831f2eeda5$var$format("sup"),
            underline: $7ea787831f2eeda5$var$format("u")
        }
    };
}


function $2e2ca389cd5e716b$export$2e2bcd8739ae039(options) {
    const data = this.data();
    function add(field, value) {
        /* c8 ignore next 2 */ if (data[field]) data[field].push(value);
        else data[field] = [
            value
        ];
    }
    // add('micromarkExtensions', syntax(options));
    // add('fromMarkdownExtensions', fromMarkdown(options));
    add("toMarkdownExtensions", (0, $7ea787831f2eeda5$export$2e2bcd8739ae039)(options));
}


async function $f4d84f30c48d834d$export$2e2bcd8739ae039(mdast, opts = {}) {
    const { listener: listener, log: log = console } = opts;
    if (listener) listener("beforePostProcess", mdast);
    const processor = (0, $5OpyM$unified)().use((0, $5OpyM$remarkstringify), {
        strong: "*",
        emphasis: "_",
        bullet: "-",
        fence: "`",
        fences: true,
        incrementListMarker: true,
        rule: "-",
        ruleRepetition: 3,
        ruleSpaces: false
    }).use((0, $5OpyM$remarkgfm)).use((0, $2e2ca389cd5e716b$export$2e2bcd8739ae039)).use((0, $5OpyM$remarkMatter)).use((0, $4cd0011159096aec$export$2e2bcd8739ae039));
    // process.stdout.write(inspect(mdast));
    // process.stdout.write('\n');
    if (opts.gridtables) {
        await (0, $5OpyM$sanitizeHeading)(mdast);
        await (0, $5OpyM$sanitizeLinks)(mdast);
        await (0, $5OpyM$sanitizeTextAndFormats)(mdast);
        await (0, $5OpyM$suppressSpaceCode)(mdast);
        await (0, $7fd1a11a8051adbd$export$2e2bcd8739ae039)(mdast);
        await (0, $4f2cbef753d40575$export$2e2bcd8739ae039)(log, mdast, opts.mediaHandler, opts.source);
        await (0, $5OpyM$imageReferences)(mdast);
        processor.use((0, $5OpyM$adoberemarkgridtables));
    } else {
        await (0, $5OpyM$sanitizeHeading)(mdast);
        await (0, $5OpyM$sanitizeFormats)(mdast); // collapse formats once
        await (0, $5OpyM$sanitizeLinks)(mdast);
        await (0, $5OpyM$sanitizeFormats)(mdast); // and again for sanitized links
        await (0, $5OpyM$renderHtmlFormats)(mdast);
        await (0, $5OpyM$sanitizeText)(mdast);
        await (0, $5OpyM$suppressSpaceCode)(mdast);
        await (0, $7fd1a11a8051adbd$export$2e2bcd8739ae039)(mdast);
        await (0, $4f2cbef753d40575$export$2e2bcd8739ae039)(log, mdast, opts.mediaHandler, opts.source);
        await (0, $5OpyM$robustTables)(mdast);
        processor.use((0, $5OpyM$breaksAsSpaces));
    }
    // process.stdout.write(inspect(mdast));
    // process.stdout.write('\n');
    if (listener) {
        listener("afterPostProcess", mdast);
        listener("beforeToMarkdown", mdast);
    }
    // noinspection JSVoidFunctionReturnValueUsed
    const md = processor.stringify(mdast);
    if (listener) listener("afterToMarkdown", md);
    return md;
}


/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


async function $12d84db41e2f9e56$export$2e2bcd8739ae039(doc, opts) {
    const { listener: listener } = opts;
    if (listener) listener("beforeParseDocx");
    const dast = await (0, $35ec8e33fdfe49b8$export$2e2bcd8739ae039)(doc, opts.parserOptions);
    if (listener) {
        listener("afterParseDocx", dast);
        listener("beforeToMdast", dast);
    }
    const mdast = await (0, $626ebda5a56eaa96$export$2e2bcd8739ae039)(dast, opts);
    if (listener) listener("afterToMdast", mdast);
    return (0, $f4d84f30c48d834d$export$2e2bcd8739ae039)(mdast, opts);
}




export {$626ebda5a56eaa96$export$2e2bcd8739ae039 as dast2mdast, $35ec8e33fdfe49b8$export$2e2bcd8739ae039 as docx2dast, $f4d84f30c48d834d$export$2e2bcd8739ae039 as mdast2md, $12d84db41e2f9e56$export$2e2bcd8739ae039 as docx2md};
//# sourceMappingURL=docx2md.js.map
