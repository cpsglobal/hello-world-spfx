# hello-world-spfx

This project is designed to give us a playground to create a `model` project that can be used for reference and a starting point for new projects.

## Environment requirements

The below requirements are required to be installed in your environment for the solution to build and function correctly

- Node.js v10.*
- Gulp: `npm i -g gulp-cli`
- Yeoman: `npm i -g yo`
- PnP Yeoman Generator: `npm i -g @pnp/generator-spfx`

## Debugging

Use the below debug configurations to launch and debug your code from within VSCode

- `Local workbench`: Launches Chrome Incognito instance which navigates to `https://localhost:4321/temp/workbench.html` (`gulp serve` is required)
- `Remote workbench`: Launches Chrome Incognito instance which navigates to `https://cpsglobaldev.sharepoint.com/_layouts/15/workbench.aspx` (`gulp serve` is required)
- `Jest All`: Launches integrated terminal and runs all tests
- `Jest Watch`: Launches integrated terminal and only runs tests changed since last commit in watch mode
- `Jest Watch All`: Launches integrated terminal and only runs tests changed since last commit in watch mode

## Build optionss

- `gulp clean`: Deletes all build output (**/dist**, **/lib**, **/temp**, etc.).
- `gulp build`: Transpiles all TypeScript & SCSS to JavaScript & CSS, generates source map files & TypeScript type declaration files
- `gulp bundle [--ship|-p|--production]`: Runs gulp task **build**, then uses webpack to create the JavaScript bundle(s) and component manifest(s) as defined in **./config/config.json**. The `--ship`, `-p` or `--production` argument specifies a production build that will generate minified bundles.
- `gulp serve [--ship|-p|--production]`: Runs gulp tasks **build**, **bundle** & starts the local webserver. Depending on the project type, it opens the browser and navigates to the local workbench or specified URL (in the case of extension components). The `--ship`, `-p` or `--production` argument specifies a production build that modifies the resulting package for production hosting rather than local hosting of assets.
- `gulp package-solution`: Creates the SharePoint Package (**.sppkg**) file.
- `gulp dist`: Creates a production-ready SharePoint Package (**.sppkg**) file. The following gulp task gets executed in this specific order `gulp clean`, `gulp bundle`, `gulp package-solution.`
- `gulp dev`: Creates a development-ready SharePoint Package (**.sppkg**) file. The following gulp task will be executed in this specific order `gulp clean`, `gulp bundle`, `gulp package-solution.`

> View all available gulp tasks by running `gulp --tasks`

## Test options

- `npm run test`: Runs all tests
- `npm run test:watch`: Runs all tests in watch mode

More information on [SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/sharepoint-framework-overview)

Generatored with [pnp/spfx](https://github.com/pnp/generator-spfx/).