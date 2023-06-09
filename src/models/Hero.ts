import { Id } from "./Id";

export interface Hero {
  heroId: Id;
  name: string;
}

export interface Hero {
  powerTypeId: number;
  popularity : number;
  strength: number;
}

export const defaultHero: Hero = {
  heroId: 0,
  name: '',
  powerTypeId: 0,
  popularity: 0,
  strength: 0
}

export type InputHero = Hero;
export type OutputHero = Hero;


