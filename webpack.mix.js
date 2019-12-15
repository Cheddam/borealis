let mix = require('laravel-mix');

mix.react('app/app.js', 'dist/app.js');
mix.react('app/core.js', 'dist/core.js');
mix.react('module/index.js', 'dist/module.js');

