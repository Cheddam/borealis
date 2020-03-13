# Borealis Act 2

A revised PoC for an asynchronous injector pattern, allowing use of React components across multiple Webpack bundles.

### Installation / Serving

```
cd borealis
yarn
yarn build
yarn link

cd ../cms
yarn
yarn link borealis
yarn build

cd ../module
yarn
yarn link borealis
yarn build

cd ..
php -S 127.0.0.1:7777
```

### Current limitations

- The async reducer (Redux) container is still a WIP
- Potential race condition causing some chunks to be unavailable when needed

