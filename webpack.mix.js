const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]);

// mix.webpackConfig(webpack => {
//     return {
//         plugins: [
//             new webpack.DefinePlugin({
//                 __VUE_OPTIONS_API__: false,
//                  __VUE_PROD_DEVTOOLS__: false,
//             }),
//         ],
//     }
// })