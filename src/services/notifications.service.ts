import { injected } from "brandi";
import { IQueue } from "../technical/IQueue";
import { ApiInstance } from "./api/ApiInstance";
import { TOKENS } from "./token";
import { NotificationValue } from "../technical/Notification";

export interface INotificationService {

    poolNotifications():Promise<void>
}

export class NotificationApiService implements INotificationService {

    constructor(private _notificationQueue: IQueue<NotificationValue>){
    }

    async poolNotifications(): Promise<void> {
        (await ApiInstance.get<NotificationValue[]>('/notification')).data.forEach((n) => {this._notificationQueue.enqueue(n);});
    }

}


injected(NotificationApiService, TOKENS.notificationQueue);