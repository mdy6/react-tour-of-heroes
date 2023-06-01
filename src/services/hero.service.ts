import { Observable, of } from "rxjs";
import { HEROES } from "../mocks/mock-heroes";
import { Hero, defaultHero } from "../models/Hero";
import { LoggerService } from "./message.service";
import { injected } from 'brandi';
import axios, { AxiosResponse } from "axios";

import { TOKENS } from './token';
import { useQuery } from "@tanstack/react-query";
import { response } from "msw";
import { resolve } from "path";

export class MockHeroService implements HeroService {

    
    constructor(private messageService: LoggerService) {
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES)
    }

    getHero(id: number): Promise<Hero> {
        let result = HEROES.find(h => h.id === id)
        if(result!== undefined){
            return Promise.resolve(result)
        }
        return Promise.resolve(defaultHero)
      }
}

export interface HeroService {
    getHeroes(): Promise<Hero[]>
    getHero(id:number): Promise<Hero>

}

injected(MockHeroService, TOKENS.consoleService)