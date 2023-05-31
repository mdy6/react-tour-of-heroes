import { FC, useEffect, useState } from "react"
import { Hero } from "../models/Hero";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";
import { Link } from "react-router-dom";


const HeroesDashboard: FC = () => {
    const [topHeroes, setTopHeroes] = useState<Hero[]>([]);
    const heroService = useInjection(TOKENS.heroService);

    const getHeroesTopHeroes = () => {
        heroService.getHeroes()
            .subscribe(heroes => setTopHeroes(heroes.slice(1, 5)));
    }

    useEffect(() => {
        getHeroesTopHeroes()
    });

    return (
        <>
            <h2>Top Heroes</h2>
            <div className="heroes-menu">
                {
                    topHeroes.map((hero) => {
                        return (
                            <Link to={`/hero/${hero.id}`}>{hero.name}</Link>);
                    }
                    )
                }
            </div>
        </>
    )
}

export default HeroesDashboard;