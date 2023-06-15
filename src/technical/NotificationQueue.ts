import { injected } from "brandi";
import { Queue } from "./Queue";
import { NotificationValue } from "./Notification";

export class NotificationQueue extends Queue<NotificationValue> { }

injected(NotificationQueue)
