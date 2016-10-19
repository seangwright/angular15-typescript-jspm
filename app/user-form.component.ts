import _ from "lodash";

import { User } from "./user";

import template from "./user-form.component.html!text";

interface IBindings {
    [key: string]: any;

    user: any;
    onUserSave: any;
}

class Changes implements ng.IOnChangesObject, IBindings {
    [key: string]: ng.IChangesObject<any>;

    public user: ng.IChangesObject<User>;
    public onUserSave: ng.IChangesObject<(param: { user: User}) => ng.IPromise<void>>;
}

let bindings: IBindings = {
    user: "<",
    onUserSave: "&"
};

class controller implements IBindings {
    public static componentName: string = "userForm";
    public static $inject: Array<string> = ["$log"];

    public user: User;

    public onUserSave: (param: { user: User }) => ng.IPromise<void>;

    public componentState: {
        isLoading: boolean
    };

    constructor(private $log: ng.ILogService) {}

    public $onChanges(changes: Changes) {
        if (changes.user && this.user) {
            this.user = _.cloneDeep(this.user);
        }
    }

    public $onInit() {
        this.componentState = {
            isLoading: false
        };

        this.$log.info("User Form initialized");
    }

    public saveUser() {
        this.$log.info("Saving user");

        this.componentState.isLoading = true;
        this.onUserSave({ user: this.user })
            .finally(() => this.componentState.isLoading = false);
    }
}

export let UserFormComponent = { controller, template, bindings };