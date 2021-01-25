const {resolve} = require('path');

module.exports = {
    entry: resolve(__dirname, 'src/globe.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'globe.js',
        library: 'IO',

    },
};
