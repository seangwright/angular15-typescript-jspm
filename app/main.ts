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