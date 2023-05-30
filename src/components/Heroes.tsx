import { FC, useState } from "react";
import { HEROES } from "../mock/mock-heroes";
import HeroListElement from "./HeroListElement";
import { Hero } from "../models/Hero";

type HeroesProps ={
     selectedHero: Hero;
     onSelect:(hero: Hero) => void
}

const Heroes: FC<HeroesProps> = ({selectedHero, onSelect}) => {

    const [heroesList, setHeroesList] = useState<Hero[]>(HEROES);
    return (
        <>
            <h2>My Heroes</h2>
            <ul className="heroes">
                {
                    heroesList.map((hero) => {
                        return (
                            <li key={hero.id}>
                                <HeroListElement hero={hero} selectHero={onSelect} selectedHeroId={selectedHero?.id} />
                            </li>
                        )
                    })

                }
            </ul>
        </>
    )
}

export default Heroes;