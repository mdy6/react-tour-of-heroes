import { token } from 'brandi';

import { MessageService } from './message.service';
import { HeroService, MockHeroService } from './hero.service';
export const TOKENS = {
    messageService: token<MessageService>('message'),
    heroService: token<HeroService>('hero')
}