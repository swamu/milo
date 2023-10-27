import {Buffer as $5OpyM$Buffer} from "buffer";
import {readFile as $5OpyM$readFile} from "fs/promises";
import $5OpyM$url from "url";
import $5OpyM$path from "path";
import {Document as $5OpyM$Document, Packer as $5OpyM$Packer, Bookmark as $5OpyM$Bookmark, TextRun as $5OpyM$TextRun, Paragraph as $5OpyM$Paragraph, Table as $5OpyM$Table, WidthType as $5OpyM$WidthType, TableRow as $5OpyM$TableRow, HeadingLevel as $5OpyM$HeadingLevel, Drawing as $5OpyM$Drawing, ImageRun as $5OpyM$ImageRun, XmlAttributeComponent as $5OpyM$XmlAttributeComponent, XmlComponent as $5OpyM$XmlComponent, ExternalHyperlink as $5OpyM$ExternalHyperlink, InternalHyperlink as $5OpyM$InternalHyperlink, AlignmentType as $5OpyM$AlignmentType, VerticalAlign as $5OpyM$VerticalAlign, ShadingType as $5OpyM$ShadingType, TableCell as $5OpyM$TableCell, LevelFormat as $5OpyM$LevelFormat, convertMillimetersToTwip as $5OpyM$convertMillimetersToTwip} from "docx";
import {visit as $5OpyM$visit} from "unist-util-visit";
import {unified as $5OpyM$unified} from "unified";
import $5OpyM$rehypeparse from "rehype-parse";
import {toMdast as $5OpyM$toMdast, defaultHandlers as $5OpyM$defaultHandlers} from "hast-util-to-mdast";
import $5OpyM$crypto from "crypto";
import {context as $5OpyM$context} from "@adobe/fetch";
import $5OpyM$adobehelixsharedprocessqueue from "@adobe/helix-shared-process-queue";
import $5OpyM$imagesize from "image-size";
import $5OpyM$mime from "mime";
import {toString as $5OpyM$toString} from "mdast-util-to-string";
import {slug as $5OpyM$slug} from "github-slugger";
import $5OpyM$remarkparse from "remark-parse";
import $5OpyM$remarkgfm from "remark-gfm";
import {dereference as $5OpyM$dereference} from "@adobe/helix-markdown-support";
import {remarkMatter as $5OpyM$remarkMatter} from "@adobe/helix-markdown-support/matter";
import $5OpyM$adoberemarkgridtables from "@adobe/remark-gridtables";

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
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



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
 */ function $45e99e03a432bb6b$var$unknown() {
    return undefined;
}
async function $45e99e03a432bb6b$export$2e2bcd8739ae039(ctx, parent) {
    const nodes = parent.children || [];
    let values = [];
    for (const node of nodes){
        const fn = ctx.handlers[node.type] || $45e99e03a432bb6b$var$unknown;
        // eslint-disable-next-line no-await-in-loop
        const result = await fn(ctx, node, parent, values);
        if (result) values = values.concat(result);
    }
    return values;
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
 */ 
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

async function $fdf00317253bac18$export$2e2bcd8739ae039(ctx, node) {
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    return new (0, $5OpyM$Bookmark)({
        id: node.anchor,
        children: children
    });
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
 */ 
function $78a8b15d147c5df1$export$2e2bcd8739ae039() {
    return new (0, $5OpyM$TextRun)({
        // could probably be optimized....
        text: "",
        break: 1
    });
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
 */ 
function $2bcbc6ccd3b46068$export$2e2bcd8739ae039(opts) {
    return async (ctx, node)=>{
        if (typeof opts === "string") // eslint-disable-next-line no-param-reassign
        opts = {
            [opts]: true
        };
        Object.assign(ctx.style, opts);
        const result = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
        Object.keys(opts).forEach((key)=>{
            delete ctx.style[key];
        });
        return result;
    };
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
 */ 
function $8ed6f8b9334e9bf8$export$2e2bcd8739ae039(ctx, node, parent) {
    const children = node.value.split("\n").map((text, idx)=>new (0, $5OpyM$TextRun)({
            text: text,
            break: idx > 0 ? 1 : 0
        }));
    return new (0, $5OpyM$Paragraph)({
        children: children,
        style: "CodeBlock",
        alignment: parent.alignment
    });
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

function* $64ddbebbd3eb036c$var$rowIter(node) {
    for (const child of node.children){
        if (child.type === "gtRow") yield child;
        else for (const grandChild of child.children)yield grandChild;
    }
}
async function $64ddbebbd3eb036c$export$2e2bcd8739ae039(ctx, node) {
    let maxCols = 1;
    // need to calculate the number of columns beforehand, for nested tables
    // compute the number of cells in each row, respecting the row and col spans.
    const pendingRowSpans = [];
    for (const row of $64ddbebbd3eb036c$var$rowIter(node)){
        let numCols = pendingRowSpans.shift() || 0;
        for (const cell of row.children){
            const rowSpan = Number.parseInt(cell.data?.rowSpan || "1", 10);
            const colSpan = Number.parseInt(cell.data?.colSpan || "1", 10);
            numCols += colSpan;
            if (rowSpan > 1) for(let i = 0; i < rowSpan - 1; i += 1)pendingRowSpans[i] = (pendingRowSpans[i] || 0) + colSpan;
        }
        maxCols = Math.max(maxCols, numCols);
    }
    const oldTable = ctx.table;
    ctx.table = {
        // remember the table width
        // default width: Letter Width - Margin = 8.5" - 2" = 6.5". the unit is 1/1440 inches.
        width: oldTable?.columnWidth || 9360,
        align: node.align || []
    };
    // use the same width for all columns
    ctx.table.columnWidth = maxCols ? ctx.table.width / maxCols : ctx.table.width;
    const columnWidths = new Array(maxCols).fill(Math.round(ctx.table.columnWidth));
    // process the rows
    const rows = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    ctx.table = oldTable;
    const tbl = new (0, $5OpyM$Table)({
        style: "PageBlock",
        rows: rows,
        columnWidths: columnWidths,
        width: {
            size: 100,
            type: (0, $5OpyM$WidthType).PERCENTAGE
        }
    });
    // add empty paragraph for better separation in word
    return [
        tbl,
        new (0, $5OpyM$Paragraph)([])
    ];
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

async function $db40ede21616ff20$export$2e2bcd8739ae039(ctx, node, parent) {
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    return new (0, $5OpyM$TableRow)({
        children: children,
        tableHeader: parent.type === "gtHeader" ? true : undefined
    });
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
 */ 

const $b8e8bd05be4322fc$var$DEPTHS = [
    (0, $5OpyM$HeadingLevel).HEADING_1,
    (0, $5OpyM$HeadingLevel).HEADING_2,
    (0, $5OpyM$HeadingLevel).HEADING_3,
    (0, $5OpyM$HeadingLevel).HEADING_4,
    (0, $5OpyM$HeadingLevel).HEADING_5,
    (0, $5OpyM$HeadingLevel).HEADING_6
];
async function $b8e8bd05be4322fc$export$2e2bcd8739ae039(ctx, node, parent) {
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    if (node.anchor) children.unshift(new (0, $5OpyM$Bookmark)({
        id: node.anchor,
        children: []
    }));
    return new (0, $5OpyM$Paragraph)({
        heading: $b8e8bd05be4322fc$var$DEPTHS[node.depth - 1],
        children: children,
        alignment: parent.alignment
    });
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
 */ 
function $300dc4fc61fa4620$export$2e2bcd8739ae039(ctx, node, parent) {
    if (node.value === "<!---->") // ignore
    return undefined;
    // should not occur...just create text
    const text = new (0, $5OpyM$TextRun)({
        color: "ff0000",
        text: node.value
    });
    if (parent.type === "paragraph") return text;
    return new (0, $5OpyM$Paragraph)({
        children: [
            text
        ]
    });
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
 */ 
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
 */ /**
 * @typedef {import('docx').XmlComponent} XmlComponent
 *
 * @param {XmlComponent} root
 * @param path
 * @returns {XmlComponent}
 */ // eslint-disable-next-line import/prefer-default-export
function $221aaff37f1dce11$export$f44605b3b39a9dd1(root, path) {
    const segs = path.split("/");
    let comp = root;
    while(comp && segs.length){
        const key = segs.shift();
        comp = comp.root.find((c)=>c.rootKey === key);
    }
    return comp;
}
function $221aaff37f1dce11$export$c499305a875a8ee9(obj) {
    for (const key of Object.keys(obj))if (obj[key] === undefined || obj[key] === null) // eslint-disable-next-line no-param-reassign
    delete obj[key];
    return obj;
}


// max image width (6.5") and height (2")
const $23f5907950aade2f$var$LIMITS = {
    width: 5943600,
    height: 1828800
};
// max image width (2") and height (1") in tables
const $23f5907950aade2f$var$LIMITS_TABLE = {
    width: 1828800,
    height: 914400
};
async function $23f5907950aade2f$export$2e2bcd8739ae039(ctx, node) {
    const { data: data } = node;
    if (!data) return undefined;
    let x = data.dimensions.width * 9525;
    let y = data.dimensions.height * 9525;
    const limits = ctx.tableAlign ? $23f5907950aade2f$var$LIMITS_TABLE : $23f5907950aade2f$var$LIMITS;
    if (x > limits.width) {
        y = Math.round(limits.width * y / x);
        x = limits.width;
    }
    if (y > limits.height) {
        x = Math.round(limits.height * x / y);
        y = limits.height;
    }
    const imageData = {
        stream: data.buffer,
        fileName: data.key,
        transformation: {
            pixels: {
                x: Math.round(data.dimensions.width),
                y: Math.round(data.dimensions.height)
            },
            emus: {
                x: x,
                y: y
            }
        }
    };
    const drawing = new (0, $5OpyM$Drawing)(imageData, {
        floating: false,
        docProperties: {
            title: node.title || "",
            description: node.alt || "",
            name: node.title || node.alt || ""
        }
    });
    // create picture
    const pic = new (0, $5OpyM$ImageRun)({
        data: data.buffer,
        transformation: data.dimensions
    });
    // replace drawing
    const oldDrawing = (0, $221aaff37f1dce11$export$f44605b3b39a9dd1)(pic, "w:drawing");
    const idx = pic.root.indexOf(oldDrawing);
    if (idx >= 0) pic.root.splice(idx, 1);
    pic.root.push(drawing);
    pic.key = data.key;
    pic.imageData = imageData;
    // for SVGs, we need to generate a proper svgBlip
    /*
  <pic:blipFill>
    <a:blip r:embed="rId4">
      <a:extLst>
        <a:ext uri="{28A0092B-C50C-407E-A947-70E740481C1C}">
          <a14:useLocalDpi val="0" xmlns:a14="http://schemas.microsoft.com/office/drawing/2010/main"/>
        </a:ext>
        <a:ext uri="{96DAC541-7B7A-43D3-8B79-37D633B846F1}">
          <asvg:svgBlip r:embed="rId5" xmlns:asvg="http://schemas.microsoft.com/office/drawing/2016/SVG/main"/>
        </a:ext>
      </a:extLst>
    </a:blip>
    <a:stretch>
      <a:fillRect/>
    </a:stretch>
  </pic:blipFill>
   */ class SvgBlip extends (0, $5OpyM$XmlComponent) {
        constructor(imgData){
            super("asvg:svgBlip");
            this.imageData = imgData;
            this.addChildElement(new (0, $5OpyM$XmlAttributeComponent)({
                "xmlns:asvg": "http://schemas.microsoft.com/office/drawing/2016/SVG/main",
                "r:embed": `rId{${imgData.fileName}}`
            }));
        }
        prepForXml(context) {
            // add the svg data if it has a stream
            if (this.imageData.stream) context.file.Media.addImage(this.imageData.fileName, this.imageData);
            // add svg content type if missing
            if (!context.file.contentTypes.root.find((entry)=>entry.rootKey === "Default" && (entry.root[0].root.extension === "svg" || entry.root[0].root.Extension === "svg"))) context.file.contentTypes.root.push(new (0, $5OpyM$XmlComponent)("Default").addChildElement(new (0, $5OpyM$XmlAttributeComponent)({
                ContentType: "image/svg+xml",
                Extension: "svg"
            })));
            return super.prepForXml(context);
        }
    }
    if (data.originalType === "image/svg") {
        // create a fake image run for the svg image
        const ir = new (0, $5OpyM$ImageRun)({
            data: data.originalBuffer,
            transformation: data.dimensions
        });
        ir.imageData.fileName = data.svgKey;
        const blipFill = (0, $221aaff37f1dce11$export$f44605b3b39a9dd1)(drawing, "wp:inline/a:graphic/a:graphicData/pic:pic/pic:blipFill");
        const blip = (0, $221aaff37f1dce11$export$f44605b3b39a9dd1)(blipFill, "a:blip");
        // const blipAttrs = findXMLComponent(oldBlip, '_attr');
        // blipAttrs.root.embed = `rId{${ir.imageData.fileName}}`;
        // add svg stuff
        // const newBlip = new XmlComponent('a:blip')
        blip.addChildElement(new (0, $5OpyM$XmlComponent)("a:extLst").addChildElement(new (0, $5OpyM$XmlComponent)("a:ext").addChildElement(new (0, $5OpyM$XmlAttributeComponent)({
            uri: "{28A0092B-C50C-407E-A947-70E740481C1C}"
        })).addChildElement(new (0, $5OpyM$XmlComponent)("a14:useLocalDpi").addChildElement(new (0, $5OpyM$XmlAttributeComponent)({
            "xmlns:a14": "http://schemas.microsoft.com/office/drawing/2010/main",
            val: "0"
        })))).addChildElement(new (0, $5OpyM$XmlComponent)("a:ext").addChildElement(new (0, $5OpyM$XmlAttributeComponent)({
            uri: "{96DAC541-7B7A-43D3-8B79-37D633B846F1}"
        })).addChildElement(new SvgBlip(ir.imageData))));
    // replace blip
    // blipFill.root.splice(blipFill.root.indexOf(oldBlip), 1, newBlip);
    }
    return pic;
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
 */ 
function $c3734083a1ca5991$export$2e2bcd8739ae039(ctx, node) {
    return new (0, $5OpyM$TextRun)({
        text: node.value,
        style: "InlineCode"
    });
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
 */ 

async function $3b4fd40a5955bf39$export$2e2bcd8739ae039(ctx, node) {
    const result = [];
    ctx.style.style = "Hyperlink";
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    // check if one of the children is an image
    if (children.findIndex((child)=>child instanceof (0, $5OpyM$ImageRun)) >= 0) {
        for (const child of (await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node)))// links on images can't be edited in word. so create a link below the image
        if (child instanceof (0, $5OpyM$ImageRun)) result.push(child, new (0, $5OpyM$TextRun)({
            text: "",
            break: 1
        }), new (0, $5OpyM$ExternalHyperlink)({
            children: [
                new (0, $5OpyM$TextRun)({
                    text: node.url,
                    style: "Hyperlink"
                })
            ],
            link: node.url
        }), new (0, $5OpyM$TextRun)({
            text: "",
            break: 1
        }));
        else result.push(new (0, $5OpyM$ExternalHyperlink)({
            children: [
                child
            ],
            link: node.url
        }));
    } else if (node.url.startsWith("#")) // Link to the headings
    result.push(new (0, $5OpyM$InternalHyperlink)({
        children: children,
        anchor: node.anchor
    }));
    else result.push(new (0, $5OpyM$ExternalHyperlink)({
        children: children,
        link: node.url
    }));
    delete ctx.style.style;
    return result;
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
 */ 
async function $c1f73adfdcf33972$export$2e2bcd8739ae039(ctx, node) {
    const { ordered: ordered, start: start } = node;
    ctx.listLevel += 1;
    let lst = ctx.lists[ctx.listLevel];
    if (!lst) {
        lst = {
            level: ctx.listLevel,
            number: start || 1,
            instance: 1
        };
        ctx.lists[ctx.listLevel] = lst;
    }
    if (start && start < lst.number) {
        lst.number = start;
        lst.instance += 1;
    }
    if (ordered) lst.numbering = "default-numbering";
    else lst.numbering = "default-bullets";
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    ctx.listLevel -= 1;
    return children;
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
 */ 
function $b5d9cd400e7547a0$export$2e2bcd8739ae039(ctx, node) {
    return (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
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
 */ 

async function $a376b675db44bbaf$export$2e2bcd8739ae039(ctx, node, parent) {
    // clear style
    ctx.style = {};
    // fix wrong children (todo: do in preprocessor)
    for(let i = 0; i < node.children.length; i += 1){
        const child = node.children[i];
        if (child.type === "paragraph") node.children.splice(i, 1, ...child.children);
    }
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    const opts = {
        children: children,
        alignment: parent.alignment
    };
    if (ctx.listLevel >= 0) {
        const list = ctx.lists[ctx.listLevel];
        if (list.numbering) {
            opts.numbering = {
                reference: list.numbering,
                level: list.level,
                instance: list.instance
            };
            list.number += 1;
        } else opts.bullet = {
            level: list.level
        };
    } else if (ctx.paragraphStyle) opts.style = ctx.paragraphStyle;
    return new (0, $5OpyM$Paragraph)(opts);
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
 */ 
function $24cc11ca6dee1e30$export$2e2bcd8739ae039(style) {
    return async (ctx, node)=>{
        ctx.paragraphStyle = style;
        const result = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
        delete ctx.paragraphStyle;
        return result;
    };
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
 */ 
function $c273ebe8ef399ed6$export$2e2bcd8739ae039(ctx, node) {
    return (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
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
 */ 

async function $5eb32b4cea57afc8$export$2e2bcd8739ae039(ctx, node) {
    let numCols = node.maxCols;
    if (node.children.length > 0) {
        // eslint-disable-next-line no-param-reassign
        node.children[0].tableHeader = true;
        if (!numCols) numCols = node.children[0].children.length;
    }
    const oldTable = ctx.table;
    ctx.table = {
        // remember the table width
        // default width: Letter Width - Margin = 8.5" - 2" = 6.5". the unit is 1/1440 inches.
        width: oldTable?.columnWidth || 9360,
        align: node.align || []
    };
    // use the same width for all columns
    ctx.table.columnWidth = numCols ? ctx.table.width / numCols : ctx.table.width;
    const columnWidths = new Array(numCols).fill(Math.round(ctx.table.columnWidth));
    // process the rows
    const rows = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    ctx.table = oldTable;
    const tbl = new (0, $5OpyM$Table)({
        style: "PageBlock",
        rows: rows,
        columnWidths: columnWidths,
        width: {
            size: 100,
            type: (0, $5OpyM$WidthType).PERCENTAGE
        }
    });
    // add empty paragraph for better separation in word
    return [
        tbl,
        new (0, $5OpyM$Paragraph)([])
    ];
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
 */ 


const $ecca0b9ffb89d89f$var$ALIGN = {
    left: null,
    right: (0, $5OpyM$AlignmentType).RIGHT,
    center: (0, $5OpyM$AlignmentType).CENTER,
    justify: (0, $5OpyM$AlignmentType).JUSTIFIED,
    distribute: (0, $5OpyM$AlignmentType).DISTRIBUTE
};
const $ecca0b9ffb89d89f$var$V_ALIGN = {
    top: (0, $5OpyM$VerticalAlign).TOP,
    middle: (0, $5OpyM$VerticalAlign).CENTER,
    bottom: (0, $5OpyM$VerticalAlign).BOTTOM
};
async function $ecca0b9ffb89d89f$export$2e2bcd8739ae039(ctx, node, parent, siblings) {
    // eslint-disable-next-line no-param-reassign
    node.alignment = $ecca0b9ffb89d89f$var$ALIGN[node.align || ctx.table.align?.[siblings.length]];
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    const content = [];
    let leaves = [];
    // wrap non block elements with paragraph
    for(let i = 0; i < children.length; i += 1){
        const child = children[i];
        if (child instanceof (0, $5OpyM$Paragraph) || child instanceof (0, $5OpyM$Table)) {
            if (leaves.length) content.push(new (0, $5OpyM$Paragraph)({
                alignment: node.alignment,
                children: leaves
            }));
            content.push(child);
            leaves = [];
        } else leaves.push(child);
    }
    if (leaves.length) content.push(new (0, $5OpyM$Paragraph)({
        alignment: node.alignment,
        children: leaves
    }));
    const opts = (0, $221aaff37f1dce11$export$c499305a875a8ee9)({
        children: content,
        verticalAlign: $ecca0b9ffb89d89f$var$V_ALIGN[node.valign],
        columnSpan: node.data?.colSpan ?? node.colSpan,
        rowSpan: node.data?.rowSpan ?? node.rowSpan
    });
    if (parent.tableHeader) // shading for header row
    opts.shading = {
        fill: "F4CCCD",
        type: (0, $5OpyM$ShadingType).CLEAR,
        color: "auto"
    };
    return new (0, $5OpyM$TableCell)(opts);
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
 */ 

async function $a0cfbf862516e381$export$2e2bcd8739ae039(ctx, node) {
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, node);
    return new (0, $5OpyM$TableRow)({
        children: children
    });
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
 */ 
function $5c40cdb778a60ccc$export$2e2bcd8739ae039(ctx, node) {
    return new (0, $5OpyM$TextRun)({
        ...ctx.style,
        // ensure no additional linebreaks in text
        text: node.value.replace(/\s+/g, " ")
    });
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
 */ 
function $5f10a5e08d1942bd$export$2e2bcd8739ae039() {
    return new (0, $5OpyM$Paragraph)({
        text: "---",
        spacing: {
            before: 250,
            after: 250
        }
    });
}


var $0a8549aaed56ce82$export$2e2bcd8739ae039 = {
    blockquote: (0, $24cc11ca6dee1e30$export$2e2bcd8739ae039)("Quote"),
    bookmark: $fdf00317253bac18$export$2e2bcd8739ae039,
    break: (0, $78a8b15d147c5df1$export$2e2bcd8739ae039),
    code: $8ed6f8b9334e9bf8$export$2e2bcd8739ae039,
    delete: (0, $2bcbc6ccd3b46068$export$2e2bcd8739ae039)("strike"),
    emphasis: (0, $2bcbc6ccd3b46068$export$2e2bcd8739ae039)("italics"),
    gridTable: $64ddbebbd3eb036c$export$2e2bcd8739ae039,
    gtBody: (0, $45e99e03a432bb6b$export$2e2bcd8739ae039),
    gtCell: (0, $ecca0b9ffb89d89f$export$2e2bcd8739ae039),
    gtFooter: (0, $45e99e03a432bb6b$export$2e2bcd8739ae039),
    gtHeader: (0, $45e99e03a432bb6b$export$2e2bcd8739ae039),
    gtRow: $db40ede21616ff20$export$2e2bcd8739ae039,
    heading: $b8e8bd05be4322fc$export$2e2bcd8739ae039,
    html: $300dc4fc61fa4620$export$2e2bcd8739ae039,
    image: $23f5907950aade2f$export$2e2bcd8739ae039,
    inlineCode: $c3734083a1ca5991$export$2e2bcd8739ae039,
    link: $3b4fd40a5955bf39$export$2e2bcd8739ae039,
    list: $c1f73adfdcf33972$export$2e2bcd8739ae039,
    listItem: $b5d9cd400e7547a0$export$2e2bcd8739ae039,
    paragraph: $a376b675db44bbaf$export$2e2bcd8739ae039,
    root: $c273ebe8ef399ed6$export$2e2bcd8739ae039,
    strong: (0, $2bcbc6ccd3b46068$export$2e2bcd8739ae039)("bold"),
    subscript: (0, $2bcbc6ccd3b46068$export$2e2bcd8739ae039)("subScript"),
    superscript: (0, $2bcbc6ccd3b46068$export$2e2bcd8739ae039)("superScript"),
    table: $5eb32b4cea57afc8$export$2e2bcd8739ae039,
    tableCell: $ecca0b9ffb89d89f$export$2e2bcd8739ae039,
    tableRow: $a0cfbf862516e381$export$2e2bcd8739ae039,
    text: $5c40cdb778a60ccc$export$2e2bcd8739ae039,
    thematicBreak: $5f10a5e08d1942bd$export$2e2bcd8739ae039,
    underline: (0, $2bcbc6ccd3b46068$export$2e2bcd8739ae039)("underline")
};


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
 */ 
function $9d6647d207556cd0$var$createLevels() {
    const levels = [];
    const formats = [
        (0, $5OpyM$LevelFormat).DECIMAL,
        (0, $5OpyM$LevelFormat).LOWER_LETTER,
        (0, $5OpyM$LevelFormat).LOWER_ROMAN
    ];
    const sfx = [
        ".",
        "",
        ""
    ];
    for(let level = 0; level < 6; level += 1)levels.push({
        level: level,
        format: formats[level % 3],
        text: `%${level + 1}${sfx[level % 3]}`,
        alignment: (0, $5OpyM$AlignmentType).START,
        style: {
            paragraph: {
                indent: {
                    left: (0, $5OpyM$convertMillimetersToTwip)(10 * (level + 1)),
                    hanging: (0, $5OpyM$convertMillimetersToTwip)(5)
                }
            }
        }
    });
    return levels;
}
function $9d6647d207556cd0$var$createBulletLevels() {
    const levels = [];
    for(let level = 0; level < 6; level += 1)levels.push({
        level: level,
        format: (0, $5OpyM$LevelFormat).BULLET,
        text: "-",
        alignment: (0, $5OpyM$AlignmentType).START,
        style: {
            paragraph: {
                indent: {
                    left: (0, $5OpyM$convertMillimetersToTwip)(5 * (level + 1)),
                    hanging: (0, $5OpyM$convertMillimetersToTwip)(5)
                }
            }
        }
    });
    return levels;
}
var $9d6647d207556cd0$export$2e2bcd8739ae039 = {
    config: [
        {
            reference: "default-numbering",
            levels: $9d6647d207556cd0$var$createLevels()
        },
        {
            reference: "default-bullets",
            levels: $9d6647d207556cd0$var$createBulletLevels()
        }
    ]
};


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
 */ "use strict";
/*
   copied and adapted from
   https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/table.js
 */ // Ensure the cells in a row are properly structured.
function $4b35ca34856dee3a$var$toCells(children) {
    const nodes = [];
    let queue;
    children.forEach((node)=>{
        if (node.type === "tableCell") {
            if (queue) {
                // eslint-disable-next-line no-param-reassign
                node.children = queue.concat(node.children);
                queue = undefined;
            }
            nodes.push(node);
        } else {
            if (!queue) queue = [];
            queue.push(node);
        }
    });
    if (queue) {
        let node = nodes[nodes.length - 1];
        if (!node) {
            node = {
                type: "tableCell",
                children: []
            };
            nodes.push(node);
        }
        node.children = node.children.concat(queue);
    }
    return nodes;
}
// Ensure the rows are properly structured.
function $4b35ca34856dee3a$var$toRows(children) {
    const nodes = [];
    let queue;
    children.forEach((node)=>{
        if (node.type === "tableRow") {
            if (queue) {
                // eslint-disable-next-line no-param-reassign
                node.children = queue.concat(node.children);
                queue = undefined;
            }
            nodes.push(node);
        } else {
            if (!queue) queue = [];
            queue.push(node);
        }
    });
    if (queue) {
        const node = nodes[nodes.length - 1];
        node.children = node.children.concat(queue);
    }
    nodes.forEach((node)=>{
        // eslint-disable-next-line no-param-reassign
        node.children = $4b35ca34856dee3a$var$toCells(node.children);
    });
    return nodes;
}
function $4b35ca34856dee3a$export$2e2bcd8739ae039(state, node) {
    const mdNode = {
        type: "table",
        children: $4b35ca34856dee3a$var$toRows(state.all(node)),
        // clean up table in respect to row and colspan and compute alignments
        align: [],
        maxCols: 0
    };
    // compute the number of cells in each row, respecting the row and col spans.
    const pendingRowSpans = [];
    for (const row of mdNode.children){
        row.numCols = pendingRowSpans.shift() || 0;
        for (const cell of row.children){
            const rowSpan = Number.parseInt(cell.data?.rowSpan || "1", 10);
            const colSpan = Number.parseInt(cell.data?.colSpan || "1", 10);
            if (cell.data?.align && !mdNode.align[row.numCols]) mdNode.align[row.numCols] = cell.data.align;
            row.numCols += colSpan;
            if (rowSpan > 1) for(let i = 0; i < rowSpan - 1; i += 1)pendingRowSpans[i] = (pendingRowSpans[i] || 0) + colSpan;
        }
        mdNode.maxCols = Math.max(mdNode.maxCols, row.numCols);
    }
    // add empty cells if needed
    for (const row of mdNode.children){
        for(let i = row.numCols; i < mdNode.maxCols; i += 1)row.children.push({
            type: "tableCell",
            children: []
        });
        delete row.numCols;
    }
    return mdNode;
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
 */ /*
   copied and adapted (adding align) from
   https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/table-cell.js
 */ "use strict";
function $53940d8d55e85087$export$2e2bcd8739ae039(state, node) {
    const wrap = state.wrapText;
    // eslint-disable-next-line no-param-reassign
    state.wrapText = false;
    const result = {
        type: "tableCell",
        children: state.all(node)
    };
    state.patch(node, result);
    if (node.properties?.rowSpan || node.properties?.colSpan || node.properties?.align) {
        const data = result.data || (result.data = {});
        if (node.properties.rowSpan) data.rowSpan = node.properties.rowSpan;
        if (node.properties.colSpan) data.colSpan = node.properties.colSpan;
        if (node.properties.align) data.align = node.properties.align;
    }
    // eslint-disable-next-line no-param-reassign
    state.wrapText = wrap;
    return result;
}


/**
 * Creates simple format handler
 * @param type
 */ function $a1198745f16e07af$var$formatHandler(type) {
    return (state, node)=>{
        const result = {
            type: type,
            children: state.all(node)
        };
        state.patch(node, result);
        return result;
    };
}
function $a1198745f16e07af$export$b5da451731849b78(state, node) {
    const properties = node.properties || {};
    // Allow potentially “invalid” nodes, they might be unknown.
    // We also support straddling later.
    const children = /** @type {Array<PhrasingContent>} */ state.all(node);
    /** @type {Link} */ const result = {
        type: "link",
        url: state.resolve(String(properties.href || "") || null),
        title: properties.title ? String(properties.title) : null,
        anchor: properties.name ?? properties.id,
        children: children
    };
    state.patch(node, result);
    return result;
}
/**
 * removes paragraphs from the child nodes recursively.
 * @param  node
 */ function $a1198745f16e07af$var$unwrapParagraphs(node) {
    if (!node.children) return node;
    for(let idx = 0; idx < node.children.length; idx += 1){
        const child = node.children[idx];
        if (child.type === "paragraph") {
            node.children.splice(idx, 1, ...child.children);
            idx += child.children.length - 1;
        } else // eslint-disable-next-line no-param-reassign
        node.children[idx] = $a1198745f16e07af$var$unwrapParagraphs(child);
    }
    return node;
}
/**
 * Handler for `<markdown>` elements.
 * @param {[]} mdasts array of mdast sub trees
 */ function $a1198745f16e07af$var$mdHandler(mdasts) {
    return (state, node)=>{
        const { idx: idx } = node.properties;
        return mdasts[+idx];
    };
}
function $a1198745f16e07af$var$isPhrasingParent(node) {
    return [
        "paragraph",
        "underline",
        "subscript",
        "superscript",
        "heading",
        "emphasis",
        "strong",
        "link",
        "linkReference",
        "tableCell",
        "delete",
        "footnote"
    ].includes(node.type);
}
function $a1198745f16e07af$export$2e2bcd8739ae039(tree) {
    const mdInserts = [];
    (0, $5OpyM$visit)(tree, (node, index, parent)=>{
        const { children: siblings = [] } = parent || {};
        // collapse html blocks
        if (node.type === "html") {
            // find last html block
            let lastHtml = siblings.length - 1;
            while(lastHtml >= index){
                if (siblings[lastHtml].type === "html") break;
                lastHtml -= 1;
            }
            let html = node.value;
            if (lastHtml > index) {
                // remove all html nodes
                const removed = siblings.splice(index + 1, lastHtml - index);
                // and append to html as special markdown element marker which is then handled in the
                // mdHandler for the `<markdown>` elements.
                removed.forEach((n)=>{
                    if (n.type === "html" || n.type === "text") html += n.value;
                    else {
                        html += `<markdown idx="${mdInserts.length}">foo</markdown>`;
                        mdInserts.push(n);
                    }
                });
            }
            if ($a1198745f16e07af$var$isPhrasingParent(parent)) html = `<p>${html}</p>`;
            // try parse html
            const hast = (0, $5OpyM$unified)().use((0, $5OpyM$rehypeparse), {
                fragment: true
            }).parse(html);
            // convert to mdast with extra handlers
            const mdast = (0, $5OpyM$toMdast)(hast, {
                document: false,
                handlers: {
                    ...(0, $5OpyM$defaultHandlers),
                    a: $a1198745f16e07af$export$b5da451731849b78,
                    u: $a1198745f16e07af$var$formatHandler("underline"),
                    sub: $a1198745f16e07af$var$formatHandler("subscript"),
                    sup: $a1198745f16e07af$var$formatHandler("superscript"),
                    table: (0, $4b35ca34856dee3a$export$2e2bcd8739ae039),
                    markdown: $a1198745f16e07af$var$mdHandler(mdInserts),
                    th: (0, $53940d8d55e85087$export$2e2bcd8739ae039),
                    td: (0, $53940d8d55e85087$export$2e2bcd8739ae039)
                }
            });
            // clear inserts
            mdInserts.length = 0;
            // ensure that flow nodes are in phrasing context
            if (!$a1198745f16e07af$var$isPhrasingParent(parent)) {
                let lastParagraph;
                for(let idx = 0; idx < mdast.children.length; idx += 1){
                    const child = mdast.children[idx];
                    if (child.type === "underline" || child.type === "subscript" || child.type === "superscript") {
                        $a1198745f16e07af$var$unwrapParagraphs(child);
                        if (!lastParagraph) {
                            lastParagraph = {
                                type: "paragraph",
                                children: [
                                    child
                                ]
                            };
                            mdast.children.splice(idx, 1, lastParagraph);
                        } else {
                            lastParagraph.children.push(child);
                            mdast.children.splice(idx, 1);
                            idx -= 1;
                        }
                    } else lastParagraph = null;
                }
            } else $a1198745f16e07af$var$unwrapParagraphs(mdast);
            // inject children of parsed tree
            siblings.splice(index, 1, ...mdast.children);
            // continue after
            return index + mdast.children.length;
        }
        return (0, $5OpyM$visit).CONTINUE;
    });
    return tree;
}



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
 */ /* eslint-disable no-param-reassign */ 






var $e40ba1f685bb15e1$require$Buffer = $5OpyM$Buffer;
function $e40ba1f685bb15e1$var$createFetchContext() {
    return (0, $5OpyM$context)();
}
function $e40ba1f685bb15e1$var$hsize(bytes, decimals = 2) {
    if (bytes === 0) return "0   ";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        "  ",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
}
async function $e40ba1f685bb15e1$export$2e2bcd8739ae039(ctx, tree) {
    const { log: log, resourceLoader: resourceLoader, image2png: image2png } = ctx;
    const context = $e40ba1f685bb15e1$var$createFetchContext();
    const { fetch: fetch } = context;
    // gather all image nodes
    const images = [];
    (0, $5OpyM$visit)(tree, (node)=>{
        if (node.type === "image" && node.url) images.push(node);
        return (0, $5OpyM$visit).CONTINUE;
    });
    let count = 0;
    // download images
    await (0, $5OpyM$adobehelixsharedprocessqueue)(images, async (node)=>{
        try {
            const ref = (0, $5OpyM$crypto).createHash("sha1").update(node.url).digest("hex");
            node.data = ctx.images[ref];
            if (node.data) return;
            const idx = String(count).padStart(2, " ");
            count += 1;
            let buffer;
            let type = "application/octet-stream";
            let maybeConvert;
            let dimensions = {
                width: 100,
                height: 100
            };
            if (node.url.startsWith("data:")) {
                const [prefix, data] = node.url.substring(5).split(",");
                const [typ, enc] = prefix.split(";");
                if (enc !== "base64") {
                    log.warn(`[${idx}] Error decoding data url. unknown encoding: ${enc}`);
                    return;
                }
                buffer = $e40ba1f685bb15e1$require$Buffer.from(data, "base64");
                type = typ;
            } else {
                log.info(`[${idx}] GET ${node.url}`);
                let doFetch = fetch;
                if (node.url.startsWith("res:")) {
                    if (!resourceLoader) {
                        log.warn(`[${idx}] Error loading image ${node.url}. resource loader missing.`);
                        return;
                    }
                    doFetch = resourceLoader.fetch.bind(resourceLoader);
                }
                const ret = await doFetch(node.url);
                if (!ret.ok) {
                    const text = await ret.text();
                    log.error(`[${idx}] ${ret.status} ${text}`);
                    return;
                }
                buffer = await ret.buffer();
                type = ret.headers.get("content-type");
                log.info(`[${idx}] ${ret.status} ${$e40ba1f685bb15e1$var$hsize(buffer.length).padStart(10)} ${type}`);
            }
            try {
                dimensions = (0, $5OpyM$imagesize)(buffer);
                type = (0, $5OpyM$mime).getType(dimensions.type);
            } catch (e) {
                maybeConvert = true;
                log.warn(`[${idx}] Error detecting dimensions: ${e} ${type}`);
            }
            if (!maybeConvert) // only convert unknown and images
            maybeConvert = type === "application/octet-stream" || type.startsWith("image/") && type !== "image/png" && type !== "image/jpg" && type !== "image/jpeg" && type !== "image/gif";
            let originalBuffer;
            let originalType;
            if (maybeConvert && image2png) try {
                const result = await image2png({
                    src: node.url,
                    data: buffer,
                    type: type
                });
                if (result) {
                    originalBuffer = buffer;
                    originalType = type;
                    buffer = result.data;
                    type = result.type;
                    dimensions = {
                        width: result.width,
                        height: result.height
                    };
                }
            } catch (e) {
                log.warn(`[${idx}] Error to convert to png`, e);
            }
            const ext = (0, $5OpyM$mime).getExtension(type);
            node.data = {
                ext: ext,
                key: `${ref}.${ext}`,
                buffer: buffer,
                originalBuffer: originalBuffer,
                type: type,
                originalType: originalType,
                dimensions: dimensions
            };
            ctx.images[ref] = node.data;
        } catch (error) {
            log.error(`Cannot download image ${node.url}: ${error.message}`);
        }
    }, 8);
    // reset fetch context
    context.reset();
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


class $68c517324b665f4a$var$GHSlugger {
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
function $68c517324b665f4a$export$645926447551ef5c(tree) {
    const tracking = {};
    const slugger = new $68c517324b665f4a$var$GHSlugger();
    const track = (url)=>{
        let ref = tracking[url];
        if (!ref) {
            ref = {
                links: [],
                heading: null,
                bookmark: null
            };
            tracking[url] = ref;
        }
        return ref;
    };
    (0, $5OpyM$visit)(tree, (node)=>{
        if (node.type === "link" && node.url.startsWith("#")) {
            const ref = track(node.url);
            ref.links.push(node);
            // special case: link to top of page
            if (node.url === "#") // eslint-disable-next-line no-param-reassign
            node.anchor = "_top";
        } else if (node.type === "link" && node.anchor) {
            // eslint-disable-next-line no-param-reassign
            node.type = "bookmark";
            track(`#${node.anchor}`).bookmark = node;
        } else if (node.type === "heading") {
            const anchor = `#${slugger.slug((0, $5OpyM$toString)(node))}`;
            track(anchor).heading = node;
        }
        return (0, $5OpyM$visit).CONTINUE;
    });
    const anchors = {};
    Object.keys(tracking).forEach((k)=>{
        const ref = tracking[k];
        if (ref.heading) {
            // ms-word heading bookmark algorithm
            const words = (0, $5OpyM$toString)(ref.heading).split(/\s+/).slice(0, 3);
            let anchor = `_${words.join("_")}`.substring(0, 36);
            // resolve collisions
            const original = anchor;
            while(anchor in anchors){
                anchors[original] += 1;
                anchor = `${original}${anchors[original]}`;
            }
            anchors[anchor] = 0;
            ref.heading.anchor = anchor;
            for (const link of ref.links)link.anchor = anchor;
        } else if (ref.bookmark) {
            const { anchor: anchor } = ref.bookmark;
            for (const link of ref.links)link.anchor = anchor;
        }
    });
}



var $7cc82061611d3c8b$require$Buffer = $5OpyM$Buffer;
async function $7cc82061611d3c8b$export$2e2bcd8739ae039(mdast, opts = {}) {
    const { log: log = console, resourceLoader: resourceLoader, image2png: image2png } = opts;
    let { stylesXML: stylesXML = null } = opts;
    const ctx = {
        handlers: $0a8549aaed56ce82$export$2e2bcd8739ae039,
        style: {},
        paragraphStyle: "",
        images: {},
        listLevel: -1,
        lists: [],
        log: log,
        image2png: image2png,
        resourceLoader: resourceLoader
    };
    // eslint-disable-next-line no-param-reassign
    mdast = (0, $a1198745f16e07af$export$2e2bcd8739ae039)(mdast);
    // process.stdout.write('==================================================\n');
    // process.stdout.write(inspect(mdast));
    // process.stdout.write('\n');
    // process.stdout.write('==================================================\n');
    await (0, $e40ba1f685bb15e1$export$2e2bcd8739ae039)(ctx, mdast);
    await (0, $68c517324b665f4a$export$645926447551ef5c)(mdast);
    const children = await (0, $45e99e03a432bb6b$export$2e2bcd8739ae039)(ctx, mdast);
    if (!stylesXML) {
        // read styles from template.docx. this seems to be the most reliable
        // const templateDoc = await readFile(path.resolve(__dirname, 'template.docx'));
        // const zip = await openArrayBuffer(templateDoc);
        // const stylesXML = await zip.read('word/styles.xml', 'utf-8');
        // eslint-disable-next-line no-underscore-dangle
        const __dirname = (0, $5OpyM$url).fileURLToPath ? (0, $5OpyM$path).dirname((0, $5OpyM$url).fileURLToPath("file:///src/mdast2docx/index.js")) : "./";
        // eslint-disable-next-line no-param-reassign
        stylesXML = await (0, $5OpyM$readFile)((0, $5OpyM$path).resolve(__dirname, "template", "word", "styles.xml"), "utf-8");
    }
    const doc = new (0, $5OpyM$Document)({
        numbering: $9d6647d207556cd0$export$2e2bcd8739ae039,
        externalStyles: stylesXML,
        sections: [
            {
                children: children
            }
        ]
    });
    // temporary hack for problems with online word
    const cn = doc.numbering.concreteNumberingMap.get("default-bullet-numbering");
    cn.root[0].root.numId = 1;
    cn.numId = 1;
    // temporary hack for problems with lists in online word
    for (const nb of doc.numbering.abstractNumberingMap.values())nb.root.forEach((attr)=>{
        if (attr.rootKey !== "w:lvl") return;
        const jc = (0, $221aaff37f1dce11$export$f44605b3b39a9dd1)(attr, "w:lvlJc");
        if (jc) {
            const idx = attr.root.indexOf(jc);
            attr.root.splice(idx, 1);
            attr.root.push(jc);
        }
    });
    let buf = await (0, $5OpyM$Packer).toBuffer(doc);
    if (buf instanceof Uint8Array) buf = $7cc82061611d3c8b$require$Buffer.from(buf);
    return buf;
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






async function $91990606066a72de$export$2e2bcd8739ae039(md, opts) {
    const mdast = (0, $5OpyM$unified)().use((0, $5OpyM$remarkparse), {
        position: false
    }).use((0, $5OpyM$remarkgfm)).use((0, $5OpyM$remarkMatter)).use((0, $5OpyM$adoberemarkgridtables)).parse(md);
    (0, $5OpyM$dereference)(mdast);
    return (0, $7cc82061611d3c8b$export$2e2bcd8739ae039)(mdast, opts);
}




export {$7cc82061611d3c8b$export$2e2bcd8739ae039 as mdast2docx, $91990606066a72de$export$2e2bcd8739ae039 as md2docx};
//# sourceMappingURL=md2docx.js.map
