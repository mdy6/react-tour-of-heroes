import { createContext } from "react";
import { NotificationQueue } from "./NotificationQueue";


export interface NotificationContextProps{
    notificationsCount : number,
    notificationQueue: NotificationQueue

}

const defaultNotificationContextProps : NotificationContextProps ={
    notificationsCount: 0,
    notificationQueue: new NotificationQueue(),
}

export const NotificationContext  = createContext<NotificationContextProps>(defaultNotificationContextProps);