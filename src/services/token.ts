import { token } from 'brandi';

import { ConsoleLogger, MessageService } from './message.service';
import {  HeroApiService } from './hero.service';
import { PaperApiService } from './paper.service';
export const TOKENS = {
    consoleService: token<ConsoleLogger>('consoleLogger'),
    messageService: token<MessageService>('messageService'),
    heroService: token<HeroApiService>('heroservice'),
    paperService:token<PaperApiService>('paperService')
}