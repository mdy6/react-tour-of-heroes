import { HEROES } from "../mocks/mock-heroes";
import { Hero, defaultHero } from "../models/Hero";
import { LoggerService } from "./message.service";
import { injected } from 'brandi';

import { TOKENS } from './token';
import { Observable, catchError, of, tap } from "rxjs";

export class MockHeroService implements HeroService {
    heroes: Hero[] = [];
    
    constructor(private messageService: LoggerService) {
        this.heroes = HEROES;
    }
    searchByName(heroName: string): Promise<Hero[]> {
        return Promise.resolve(this.heroes.filter((h)=> h.name.toLowerCase().includes(heroName)))
    }



    updateHero(hero: Hero): Promise<number> {
        var heroToUpdateId = this.heroes.findIndex((h) => h.id == hero.id);
        if(heroToUpdateId > 0){
            this.heroes[heroToUpdateId] = hero;
            this.messageService.add(`Hero :${hero.name} updated`)
            return Promise.resolve(this.heroes[heroToUpdateId].id)
        }
        return Promise.resolve(0)    
    }

    addHero(hero: Hero): Promise<number> {
        if(hero.id === 0 && hero.name.length> 0){
            var maxId = this.heroes.map((h)=> h.id).sort((a,b) => b-a)[0]
            console.log(maxId)
            var newHero: Hero = {id: maxId + 1, name: hero.name}
            this.heroes.push(newHero)
            return Promise.resolve(maxId);
        }
        return Promise.resolve(0)
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(this.heroes)
    }

    getHero(id: number): Promise<Hero> {
        let result = this.heroes.find(h => h.id === id)
        if(result!== undefined){
            return Promise.resolve(result)
        }
        return Promise.resolve(defaultHero)
      }
}

export interface HeroService {
    getHeroes(): Promise<Hero[]>
    getHero(id:number): Promise<Hero>
    addHero(hero:Hero): Promise<number>
    updateHero(hero:Hero): Promise<number>
    searchByName(heroName :string):Promise<Hero[]>

}

injected(MockHeroService, TOKENS.consoleService)