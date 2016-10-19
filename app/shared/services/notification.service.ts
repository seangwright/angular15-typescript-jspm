import toastr from "toastr";

export interface INotificationService {
    showSuccess(message: string): void;
    showInfo(message: string): void;
    showError(message: string): void;
}

export class NotificationService implements INotificationService {
    public static serviceName: string = "NotificationService";
    public static $inject: Array<string> = [];

    constructor() {}

    public showSuccess(message: string) {
        toastr.success(message);
    }

    public showInfo(message: string) {
        toastr.info(message);
    }

    public showError(message: string) {
        toastr.error(message);
    }
}