import { User } from "../models/index";

import { INotificationService, NotificationService } from "../../shared/index";

export interface IUserService {
    saveUser(user: User): ng.IPromise<User>;
}

export class UserService implements IUserService {
    public static serviceName: string = "UserService";
    public static $inject: Array<string> = ["$timeout", NotificationService.serviceName];

    constructor(
        private $timeout: ng.ITimeoutService,
        private notificationService: INotificationService
    ) {}

    public saveUser(user: User): ng.IPromise<User> {
        return this.$timeout(() => this.simulateSave(user), 3000);
    }

    private simulateSave(user: User): User {
        this.notificationService.showSuccess(`User ${user.name} successfully saved`);
        return new User(user.id, user.name);
    }
}