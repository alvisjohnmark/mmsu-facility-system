const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            'stream': require.resolve('stream-browserify')
        },
    },
};
