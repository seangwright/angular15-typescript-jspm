System.register(["lodash", "./user-form.component.html!text"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lodash_1, user_form_component_html_text_1;
    var Changes, bindings, UserFormController, UserFormComponent;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (user_form_component_html_text_1_1) {
                user_form_component_html_text_1 = user_form_component_html_text_1_1;
            }],
        execute: function() {
            Changes = (function () {
                function Changes() {
                }
                return Changes;
            }());
            bindings = {
                user: "<",
                onUserSave: "&"
            };
            UserFormController = (function () {
                function UserFormController($log) {
                    this.$log = $log;
                }
                UserFormController.prototype.$onChanges = function (changes) {
                    if (changes.user && this.user) {
                        this.user = lodash_1.default.cloneDeep(this.user);
                    }
                };
                UserFormController.prototype.$onInit = function () {
                    this.componentState = {
                        isLoading: false
                    };
                    this.$log.info("User Form initialized");
                };
                UserFormController.prototype.saveUser = function () {
                    var _this = this;
                    this.$log.info("Saving user");
                    this.componentState.isLoading = true;
                    this.onUserSave({ user: this.user })
                        .finally(function () { return _this.componentState.isLoading = false; });
                };
                UserFormController.componentName = "userForm";
                UserFormController.$inject = ["$log"];
                return UserFormController;
            }());
            UserFormComponent = {
                bindings: bindings,
                controller: UserFormController,
                template: user_form_component_html_text_1.default
            };
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map