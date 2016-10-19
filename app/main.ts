// Uncomment to pull in all polyfills for IE11, ect..
// import "core-js" 

// Uncomment to pull in a single polyfill (for Map in this example) - look in jspm_packages/npm/core-js\@2.4.1/modules/ for full list
// import "core-js/modules/es6.map";

import * as ng from "angular";

import { UserService } from "./user.service";

import { UserFormComponent } from "./user-form.component";

import { UserListComponent } from "./user-list.component";

import { UserComponent } from "./user.component";

let moduleName = "demo";

ng.module(moduleName, [])
    .service(UserService.serviceName, UserService)
    .component(UserFormComponent.controller.componentName, UserFormComponent)
    .component(UserComponent.controller.componentName, UserComponent)
    .component(UserListComponent.controller.componentName, UserListComponent);

let appRootEl = document.querySelector("#app-container") || document.body;

ng.bootstrap(appRootEl, [moduleName]);