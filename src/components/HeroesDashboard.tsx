import { FC, useEffect, useState } from "react"
import { Hero } from "../models/Hero";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";
import { Link } from "react-router-dom";
import { BackButton } from "./utils/BackButton";
import { Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";


const HeroesDashboard: FC = () => {
    const [topHeroes, setTopHeroes] = useState<Hero[]>([]);
    const heroService = useInjection(TOKENS.heroService);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [heroesSearchResult, setHeroesSearchResult] = useState<Hero[]>([]);
    const searchValueSubject: Subject<string> = new Subject<string>();

    const getHeroesTopHeroes = async () => {
        let heroes = await heroService.getHeroes()
        setTopHeroes(heroes.slice(1, 5));
    }

    useEffect(() => {
        getHeroesTopHeroes()
        // searchValueSubject.pipe(
        //     debounceTime(300),
        //     distinctUntilChanged(),
        //     switchMap((term: string) => setSearchResultFromService(term))
        // )
    }, []);
    const handleSearchHeroes = (term: string) => {
        setSearchTerm(term)
        if (term.length === 0) {
            setHeroesSearchResult([])
            return
        }
        heroService.searchByName(term).then((response) => {
            console.log(response)
            setHeroesSearchResult(response)
        })
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

            <div id="search-component">
                <label >Hero Search</label>
                <input id="search-box" value={searchTerm} onChange={(e) => handleSearchHeroes(e.target.value)} />
                <ul className="search-result">
                    {
                        heroesSearchResult.map((hero) => {
                            return (
                                <li >
                                    <Link key={hero.id} to={`/hero/${hero.id}`}>{hero.name}</Link>
                                </li>)
                        }
                        )
                    }
                </ul>
            </div>
            <div className="heroes-menu">
                {
                    topHeroes.map((hero) => {
                        return (
                            <Link key={hero.id} to={`/hero/${hero.id}`}>{hero.name}</Link>);
                    }
                    )
                }
            </div>
            <BackButton />
        </>
    )
}

export default HeroesDashboard;