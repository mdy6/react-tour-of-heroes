import { FC, useEffect, useState } from "react";
import HeroListElement from "./HeroListElement";
import { useInjection } from "brandi-react";
import { TOKENS } from "../../services/token";
import { Hero, defaultHero } from "../../models/Hero";
import { BackButton } from "../utils/BackButton";



const Heroes: FC = () => {

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
                <input id="herosaveid" onChange={(e) => setNewHeroName(e.target.value)}></input>

                <button type="button" className="add-button" onClick={() => addHero()}>
                    Add hero
                </button>
            </div>
            <ul className="heroes">
                {
                    heroesList.map((hero) => {
                        return (
                            <li key={hero.heroId}>
                                <HeroListElement hero={hero}   />
                            </li>
                        )
                    })

                }
            </ul>
            <BackButton/>

        </>
    )
}

export default Heroes;