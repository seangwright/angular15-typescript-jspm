import _ from "lodash";

import { User } from "../models/index";

import template from "./user.component.html!text";

interface IBindings {
    [key: string]: any;

    user: any;
    onUserSelect: any;
}

class Changes implements ng.IOnChangesObject, IBindings {
    [key: string]: ng.IChangesObject<any>;

    public user: ng.IChangesObject<User>;
    public onUserSelect: ng.IChangesObject<(param: { user: User }) => void>;
}

let bindings: IBindings = {
    user: "<",
    onUserSelect: "&"
};

class controller implements IBindings {
    public static componentName: string  = "user";
    public static $inject: Array<string> = ["$log"];

    public user: User;

    public onUserSelect: (param: { user: User }) => void;

    constructor(private $log: ng.ILogService) {}

    public $onChanges(changes: Changes) {
        if (changes.user && this.user) {
            this.$log.info("User binding changed");
            this.user = _.cloneDeep(this.user);
        }
    }

    public select() {
        this.$log.info(`User ${this.user.name} selected`);
        this.onUserSelect({ user: this.user });
    }
}

export let UserComponent = { controller, template, bindings };