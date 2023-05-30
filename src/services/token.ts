import { token } from 'brandi';

import { ConsoleLogger, MessageService } from './message.service';
import { HeroService, MockHeroService } from './hero.service';
export const TOKENS = {
    consoleService: token<ConsoleLogger>('consoleLogger'),
    messageService: token<MessageService>('messageService'),
    heroService: token<MockHeroService>('mockheroservice')
}