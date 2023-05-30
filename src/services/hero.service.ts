import { Observable, of } from "rxjs";
import { HEROES } from "../mock/mock-heroes";
import { Hero } from "../models/Hero";
import { MessageService } from "./message.service";
import { injected } from 'brandi';

import { TOKENS } from './token';

export class MockHeroService implements HeroService {

    constructor(private messageService: MessageService) {
    }
    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        return heroes;
      }}

export interface HeroService {
    getHeroes() : Observable<Hero[]>
}

injected(MockHeroService, TOKENS.messageService)