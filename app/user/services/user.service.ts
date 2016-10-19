import { User } from "../models/index";

interface IUserService {
    saveUser(user: User): ng.IPromise<User>;
}

class UserService implements IUserService {
    public static serviceName: string = "UserService";
    public static $inject: Array<string> = ["$timeout"];

    constructor(private $timeout: ng.ITimeoutService) {}

    public saveUser(user: User): ng.IPromise<User> {
        return this.$timeout(() => new User(user.id, user.name), 3000);
    }
}

export { IUserService, UserService };