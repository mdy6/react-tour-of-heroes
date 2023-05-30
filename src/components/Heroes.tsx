import { FC, useEffect, useState } from "react";
import HeroListElement from "./HeroListElement";
import { Hero } from "../models/Hero";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";

type HeroesProps = {
    selectedHero: Hero;
    onSelect: (hero: Hero) => void
}

const Heroes: FC<HeroesProps> = ({ selectedHero, onSelect }) => {

    const heroService = useInjection(TOKENS.heroService);
    
    const [heroesList, setHeroesList] = useState<Hero[]>([]);

    useEffect(() => {
        getHeroes()
    }, []);

    const getHeroes = () => {
       heroService.getHeroes()
        .subscribe(heroes => setHeroesList(heroes));
    }

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