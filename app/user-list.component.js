System.register(["lodash", "./user", "./user.service", "./user-list.component.html!text"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lodash_1, user_1, user_service_1, user_list_component_html_text_1;
    var UserListController, UserListComponent;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_list_component_html_text_1_1) {
                user_list_component_html_text_1 = user_list_component_html_text_1_1;
            }],
        execute: function() {
            UserListController = (function () {
                function UserListController($log, userService) {
                    this.$log = $log;
                    this.userService = userService;
                }
                UserListController.prototype.$onInit = function () {
                    this.users = [new user_1.User(1, "Joe"), new user_1.User(2, "Abby"), new user_1.User(3, "Jin")];
                    this.$log.info("User List initialized");
                };
                UserListController.prototype.userSelectHandler = function (user) {
                    this.selectedUser = user;
                };
                UserListController.prototype.userSaveHandler = function (user) {
                    var _this = this;
                    this.$log.info("Saving user");
                    // make request to api to save the user
                    return this.userService.saveUser(user)
                        .then(function (updatedUser) {
                        var index = lodash_1.default.findIndex(_this.users, function (u) { return u.id === updatedUser.id; });
                        _this.users[index] = updatedUser;
                        _this.selectedUser = null;
                    });
                };
                UserListController.componentName = "userList";
                UserListController.$inject = ["$log", user_service_1.UserService.serviceName];
                return UserListController;
            }());
            UserListComponent = {
                controller: UserListController,
                template: user_list_component_html_text_1.default
            };
            exports_1("UserListComponent", UserListComponent);
        }
    }
});
//# sourceMappingURL=user-list.component.js.map