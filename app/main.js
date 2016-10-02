System.register(["angular", "./user.service", "./user-form.component", "./user-list.component", "./user.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ng, user_service_1, user_form_component_1, user_list_component_1, user_component_1;
    var moduleName, appRootEl;
    return {
        setters:[
            function (ng_1) {
                ng = ng_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (user_list_component_1_1) {
                user_list_component_1 = user_list_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            moduleName = "demo";
            ng.module(moduleName, [])
                .service(user_service_1.UserService.serviceName, user_service_1.UserService)
                .component(user_form_component_1.UserFormComponent.controller.componentName, user_form_component_1.UserFormComponent)
                .component(user_component_1.UserComponent.controller.componentName, user_component_1.UserComponent)
                .component(user_list_component_1.UserListComponent.controller.componentName, user_list_component_1.UserListComponent);
            appRootEl = document.querySelector("#app-container") || document.body;
            ng.bootstrap(appRootEl, [moduleName]);
        }
    }
});
//# sourceMappingURL=main.js.map