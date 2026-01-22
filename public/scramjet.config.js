// Scramjet Config
const xorCodec = {
    encode: (str) => {
        if (!str) return str;
        return encodeURIComponent(str.split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join(''));
    },
    decode: (str) => {
        if (!str) return str;
        const [url, ...search] = str.split('?');
        return decodeURIComponent(url).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join('') + (search.length ? '?' + search.join('?') : '');
    }
};

self.__scramjet$config = {
    prefix: '/service/',
    codec: xorCodec,
    config: '/scramjet.config.js',
    globals: {
        wrapfn: '$scramjet$wrapfn',
        wrappropertybase: '$scramjet$prop$',
        wrappropertyfn: '$scramjet$wrappropertyfn',
        cleanrestfn: '$scramjet$cleanrestfn',
        importfn: '$scramjet$importfn',
        rewritefn: '$scramjet$rewritefn',
        metafn: '$scramjet$metafn',
        setrealmfn: '$scramjet$setrealmfn',
        pushsourcemapfn: '$scramjet$pushsourcemapfn',
        trysetfn: '$scramjet$trysetfn',
        templocid: '$scramjet$templocid',
        tempunusedid: '$scramjet$tempunusedid'
    },
    files: {
        wasm: "/scram/scramjet.wasm.wasm",
        all: "/scram/scramjet.all.js",
        sync: "/scram/scramjet.sync.js",
    },
    flags: {
        serviceworkers: true,
        syncxhr: true,
        strictRewrites: false,
        rewriterLogs: false,
        captureErrors: false,
        cleanErrors: false,
        scramitize: false,
        sourcemaps: true,
        destructureRewrites: false,
        interceptDownloads: true,
        allowInvalidJs: true,
        allowFailedIntercepts: true
    }
};
