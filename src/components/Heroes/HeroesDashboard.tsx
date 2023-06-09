import { FC, useEffect, useState } from "react"
import { useInjection } from "brandi-react";
import { Link } from "react-router-dom";
import { Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";
import { Hero } from "../../models/Hero";
import { TOKENS } from "../../services/token";
import { BackButton } from "../utils/BackButton";


const HeroesDashboard: FC = () => {
    const [topHeroes, setTopHeroes] = useState<Hero[]>([]);
    const heroService = useInjection(TOKENS.heroService);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [heroesSearchResult, setHeroesSearchResult] = useState<Hero[]>([]);
    const [searchValueSubject, setSearchValueSubject] = useState<Subject<string>>(new Subject<string>());

    const getHeroesTopHeroes = async () => {
        let heroes = await heroService.getHeroes()
        setTopHeroes(heroes.slice(1, 5));
    }

    useEffect(() => {
        getHeroesTopHeroes()
        searchValueSubject.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) => heroService.searchByName(term))
        ).subscribe((heroes) => setHeroesSearchResult(heroes))
    }, []);


    const handleSearchHeroes = (term: string) => {
        setSearchTerm(term)
        searchValueSubject.next(term)
    }

    const setSearchResultFromService = (term: string) => {
        heroService.searchByName(term).then((response) => {
            console.log(response)
            setHeroesSearchResult(response)
        })
        return heroesSearchResult;
    }

    return (
        <>
            <h2>Top Heroes</h2>

            <div className="heroes-menu">
                {
                    topHeroes.map((hero) => {
                        return (
                            <Link key={hero.heroId} to={`/hero/${hero.heroId}`}>{hero.name}</Link>);
                    }
                    )
                }
            </div>
            <div id="search-component">
                <label >Hero Search</label>
                <input id="search-box" value={searchTerm} onChange={(e) => handleSearchHeroes(e.target.value)} />
                <ul className="search-result">
                    {
                        heroesSearchResult.map((hero) => {
                            return (
                                <li >
                                    <Link key={hero.heroId} to={`/hero/${hero.heroId}`}>{hero.name}</Link>
                                </li>)
                        }
                        )
                    }
                </ul>
            </div>
            <BackButton />
        </>
    )
}

export default HeroesDashboard;