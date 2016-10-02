System.register(["./user"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user_1;
    var UserService;
    return {
        setters:[
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService($timeout) {
                    this.$timeout = $timeout;
                }
                UserService.prototype.saveUser = function (user) {
                    return this.$timeout(function () {
                        return new user_1.User(user.id, user.name);
                    }, 3000);
                };
                UserService.serviceName = "UserService";
                UserService.$inject = ["$timeout"];
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map