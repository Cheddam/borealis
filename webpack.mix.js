let mix = require('laravel-mix');

mix.react('app/index.js', 'dist/app.js');
mix.react('module/index.js', 'dist/module.js');

