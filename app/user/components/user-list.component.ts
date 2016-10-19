import _ from "lodash";

import { User } from "../models/index";

import { IUserService, UserService } from "../services/index";

import template from "./user-list.component.html!text";

class controller {
    public static readonly componentName: string = "userList";
    public static readonly $inject: Array<string> = ["$log", UserService.serviceName];

    public selectedUser: User;

    public users: Array<User>;

    constructor(
        private $log: ng.ILogService,
        private userService: IUserService) {}

    public $onInit() {
        this.users = [new User(1, "Joe"), new User(2, "Abby"), new User(3, "Jin")];

        this.$log.info("User List initialized");
    }

    public userSelectHandler(user: User) {
        this.selectedUser = user;
    }

    public userSaveHandler(user: User): ng.IPromise<void> {
        this.$log.info("Saving user");

        // make request to api to save the user
        return this.userService.saveUser(user)
            .then(updatedUser => {
                let index = _.findIndex(this.users, (u) => u.id === updatedUser.id);
                this.users[index] = updatedUser;
                this.selectedUser = null;
            });
    }
}

export let UserListComponent = { controller, template };