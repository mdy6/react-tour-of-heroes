import { token } from 'brandi';

import { ConsoleLogger, MessageService } from './message.service';
import {  HeroApiService } from './hero.service';
import { PaperApiService } from './paper.service';
import { NotificationApiService } from './notifications.service';
import { NotificationQueue } from '../technical/NotificationQueue';
export const TOKENS = {
    consoleService: token<ConsoleLogger>('consoleLogger'),
    messageService: token<MessageService>('messageService'),
    heroService: token<HeroApiService>('heroservice'),
    paperService:token<PaperApiService>('paperService'),
    notificationService:token<NotificationApiService>('notificationService'),
    notificationQueue: token<NotificationQueue>('notificationQueue')
}