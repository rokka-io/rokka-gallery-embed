import type { OutputChunk } from 'rollup';

export default () => ({
    name: 'single-script-embed-with-props',
    apply: 'build',
    enforce: 'post',
    generateBundle: async (opts, bundle) => {
        const jsFile = bundle[opts.entryFileNames] as OutputChunk;
        jsFile.code = IIFE_WRAPPER(jsFile.code, opts.name);
    }
})

const IIFE_WRAPPER = (inner: string, objectName: string) => `
(function () {
    if(!window.${objectName}) {
        ${inner};
        window.${objectName} = ${objectName};
    }
    
    const attributePrefix = 'data-';
    const data = {};

    const script = document.currentScript;
    const attributes = script.getAttributeNames();
    const dataAttributes = attributes.filter(attr => attr.startsWith(attributePrefix));
    for (dataAttribute of dataAttributes) {
        const propName = dataAttribute.replace(attributePrefix, '')
        data[propName] = script.getAttribute(dataAttribute);
    }

    const containerId = 'container-'+crypto.randomUUID();
    const container = document.createElement("div");
    container.id = containerId;

    script.parentElement.replaceChild(container, script)
    window.${objectName}.mount('#'+containerId, data);
})();
`
