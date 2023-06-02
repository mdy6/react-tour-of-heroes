import { FC, useEffect, useState } from "react"
import { Hero } from "../models/Hero";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";
import { Link } from "react-router-dom";
import { BackButton } from "./utils/BackButton";


const HeroesDashboard: FC = () => {
    const [topHeroes, setTopHeroes] = useState<Hero[]>([]);
    const heroService = useInjection(TOKENS.heroService);

    const getHeroesTopHeroes = async () => {
        let heroes = await heroService.getHeroes()
        setTopHeroes(heroes.slice(1, 5));
    }

    useEffect(() => {
        getHeroesTopHeroes()
    }, []);

    return (
        <>
            <h2>Top Heroes</h2>
            <div className="heroes-menu">
                {
                    topHeroes.map((hero) => {
                        return (
                            <Link key={hero.id} to={`/hero/${hero.id}`}>{hero.name}</Link>);
                    }
                    )
                }
            </div>
            <BackButton/>
        </>
    )
}

export default HeroesDashboard;