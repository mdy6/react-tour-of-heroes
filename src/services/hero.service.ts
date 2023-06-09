import { HEROES } from "../mocks/mock-heroes";
import { Hero, InputHero, OutputHero, defaultHero } from "../models/Hero";
import { LoggerService } from "./message.service";
import { injected } from 'brandi';

import { TOKENS } from './token';
import { ApiInstance } from "./api/ApiInstance";
import { Id } from "../models/Id";

export class MockHeroService implements HeroService {
    heroes: Hero[] = [];

    constructor(private messageService: LoggerService) {
    }
    
    async searchByName(heroName: string): Promise<Hero[]> {
        this.heroes = await this.getHeroes()
        if(heroName.length === 0)
            return Promise.resolve([]);
        var searchfilter = heroName.toLowerCase()
        return Promise.resolve(this.heroes.filter((h)=> h.name.toLowerCase().startsWith(searchfilter) 
        || h.name.toLowerCase().includes(searchfilter) 
        ||h.name.toLowerCase().endsWith(searchfilter)))
    }



    async updateHero(hero: Hero): Promise<number> {
        let result = await ApiInstance.post<Id>("heroes", hero as InputHero)
        return result.data; 
    }

    async addHero(hero: Hero): Promise<number> {
        let result = await ApiInstance.post<Id>("heroes", hero as InputHero)
        console.log(result.status)
        return result.data;
    }

    async getHeroes(): Promise<Hero[]> {
        let heroes = await ApiInstance.get<OutputHero[]>("heroes")
        return heroes.data;
    }

    async getHero(id: number): Promise<Hero> {
        let hero = await ApiInstance.get<OutputHero>(`heroes/${id}`)
        return hero.data;
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