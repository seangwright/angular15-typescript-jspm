# angular15-typescript-jspm
Demo of using Angular ^1.5.8, Typescript ^2.0.0 and JSPM

## Why use Angular 1 Components, Typescript and JSPM?
* Angular Components
    1. Modular component-based architecture
    1. Predicatable one-way data flow
    1. 100% of the time, Angular `component`'s simpler API compared to Angular `directives`, covers your use case 80% of the time
* Typescript
    1. Use types only when you want to
    1. Type checking on your own code leads to better scalability in development process for large apps/large teams
    1. Not just for your code: type checking on 3rd party libraries with `typings`
* JSPM
    1. Automated build process
    1. Automated dependency management
    1. Use es2015 modules today

## Links
* [JSPM](http://jspm.io)
* [SystemJs](https://github.com/systemjs/systemjs)
* [Typescript](https://github.com/basarat/typescript-book)
* [Tslint](http://palantir.github.io/tslint/usage/cli/)
* [Typings](https://www.npmjs.com/package/typings)
* [Definitely Typed: Old typings repository](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md)
* [Angular 1.5 Component](https://toddmotto.com/exploring-the-angular-1-5-component-method/)
* [Component Lifecycle Hooks](https://toddmotto.com/angular-1-5-lifecycle-hooks)

## Installation
1. Node and npm (go [download](https://nodejs.org) it from the web or using your favorite package manager)
1. [VS Code](https://code.visualstudio.com) (to get development experience outlined in this README)
1. Tooling (from command line)
    1. jspm CLI (`npm i -g jspm`)
    1. TypeScript CLI (`npm i -g typescript`)
    1. Typings CLI (`npm i -g typings`)
    1. TSLint (`npm i -g tslint`)
    1. `jspm registry config github` - use [Github personal access tokens](https://github.com/settings/tokens) (read docs on registry configuration [here](https://github.com/jspm/jspm-cli/blob/master/docs/registries.md))
1. clone repository (`git clone https://github.com/sgwatgit/angular15-typescript-jspm.git`)
1. `cd angular15-typescript-jspm`
1. Run `npm install` afterward to restore all the neccessary dependencies.
   * This will also run `jspm install` and `typings install` which will add client site dependencies and non-typescript library type support
1. [TSLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

## App Structure

### Directories
>`/.vscode/` contains VS Code project configuration (hides `/node_modules/` and `/jspm_packages/`)

>`/jspm_packages/` client site application module dependencies (hidden in VS Code)

>`/node_modules/` development cycle module dependencies (hidden in VS Code)

>`/app/` main application files including entrypoint (`main.ts`) and angular component files (`user-form.component.ts`)

>`/typings/` Typescript definition files for non-Typescript libraries

### Files
>`config.js` SystemJs module loading configuration file managed by `JSPM` (contains dependencies at exact versions in the app)

>`index.html` page in which the application runs

>`package.json` Node module dependency list, project configuration (also includes `JSPM` package dependencies and defines valid Semver range)

>`tsconfig.json` Typescript compilation configuration for project

>`tslint.json` Tslint configuration for project Typescript linting

>`typings.json` References to locations and versions of Typescript typings files


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