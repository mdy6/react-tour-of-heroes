import { Observable, of } from "rxjs";
import { HEROES } from "../mock/mock-heroes";
import { Hero } from "../models/Hero";
import { LoggerService } from "./message.service";
import { injected } from 'brandi';

import { TOKENS } from './token';

export class MockHeroService implements HeroService {

    constructor(private messageService: LoggerService) {
    }

    getHeroes(): Observable<Hero[]> {
        const heroes = of(HEROES);
        this.messageService.add("fetch all heroes");
        return heroes;
    }

    getHero(id: number): Observable<Hero> {
        const hero = HEROES.find(h => h.id === id)!;
        this.messageService.add(`HeroService: fetched hero id=${id}`);
        return of(hero);
      }
}

export interface HeroService {
    getHeroes(): Observable<Hero[]>
    getHero(id:number): Observable<Hero>

}

injected(MockHeroService, TOKENS.consoleService)