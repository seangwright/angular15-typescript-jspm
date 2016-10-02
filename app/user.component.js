System.register(["lodash", "./user.component.html!text"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lodash_1, user_component_html_text_1;
    var Changes, bindings, UserController, UserComponent;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (user_component_html_text_1_1) {
                user_component_html_text_1 = user_component_html_text_1_1;
            }],
        execute: function() {
            Changes = (function () {
                function Changes() {
                }
                return Changes;
            }());
            bindings = {
                user: "<",
                onUserSelect: "&"
            };
            UserController = (function () {
                function UserController($log) {
                    this.$log = $log;
                }
                UserController.prototype.$onChanges = function (changes) {
                    if (changes.user && this.user) {
                        this.$log.info("User changed");
                        this.user = lodash_1.default.cloneDeep(this.user);
                    }
                };
                UserController.prototype.select = function () {
                    this.onUserSelect({ user: this.user });
                };
                UserController.componentName = "user";
                UserController.$inject = ["$log"];
                return UserController;
            }());
            UserComponent = {
                bindings: bindings,
                controller: UserController,
                template: user_component_html_text_1.default
            };
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map