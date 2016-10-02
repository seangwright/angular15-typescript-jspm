# angular15-typescript-jspm
Demo of using Angular ^1.5.8, Typescript ^2.0.0 and JSPM
## Installation
1. node and npm (go [download](https://nodejs.org) it from the web or using your favorite package manager)
1. jspm CLI (`npm i -g jspm`)
1. TypeScript CLI (`npm i -g typescript`)
1. Typings CLI (`npm i -g typings`)
1. TSLint (`npm i -g tslint`)
1. clone repository (`git clone https://github.com/sgwatgit/angular15-typescript-jspm.git`)
1. `cd angular15-typescript-jspm`
1. Run `npm install` afterward to restore all the neccessary dependencies.
   * This will also run `jspm install` and `typings install` which will add client site dependencies and non-typescript library type support
1. Install TSLint VSCode extension
## Usage
### Build Process
#### Dev
* `npm run unbundle` (if previously bundled)
* `npm start`
  * This will launch the application running on a local server with `browser-sync` support
#### Production
* `npm run bundle` or `npm run bundle:prod`
  * **NOTE:** Once bundled is created and injected, the app will be served from the generated `bundle.js` and therefore will break live-reloading while in development mode.
To re-enable live-reloading for script, run `npm run unbundle` to remove the bundling and rebundle again once you are ready for deployment.
* Copy `config.js`, `build.js` and `jspm_packages/system.js` to your server and add the following script tags
   * **Note:** If you need to support IE11 you will also need to deploy `jspm_packages/system-polyfills.js`
```javascript
<script src="/system.js"></script>
<script src="/config.js"></script>
<script src="/build.js"></script>
<script>
     System.import("app")
            .catch(function(err) { 
                console.error(err);
            });
</script>
```

## License
MIT