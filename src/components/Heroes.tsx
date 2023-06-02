import { FC, useEffect, useState } from "react";
import HeroListElement from "./HeroListElement";
import { Hero, defaultHero } from "../models/Hero";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";

type HeroesProps = {
    selectedHero: Hero;
    onSelect: (hero: Hero) => void
}

const Heroes: FC<HeroesProps> = ({ selectedHero, onSelect }) => {

    const heroService = useInjection(TOKENS.heroService);
    const [heroesList, setHeroesList] = useState<Hero[]>([]);
    const [newHeroName, setNewHeroName] = useState<string>("");
    const [refreshKey,setRefreshKey] = useState<number>(Date.now());

    const getHeroes = () => {
        heroService.getHeroes().then((response) => {
            setHeroesList(response as Hero[]);
        }).catch((error) => {
            console.log(error)
        });
    }

    const addHero = () => {
        let newHero: Hero = defaultHero;
        newHero.name = newHeroName;
        heroService.addHero(newHero)
        setRefreshKey(Date.now())
    }
    useEffect(() => {
        getHeroes()
    }, [heroesList.length,refreshKey]);

    return (
        <>
            <h2>My Heroes</h2>
            <div>
                <label >Hero name: </label>
                <input onChange={(e) => setNewHeroName(e.target.value)}></input>

                <button type="button" className="add-button" onClick={() => addHero()}>
                    Add hero
                </button>
            </div>
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