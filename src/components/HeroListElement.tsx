import { FC } from "react";
import { Hero } from "../models/Hero";

type HeroListElementProps = {
    selectedHeroId: number,
    hero: Hero,
    selectHero: (hero: Hero) => void
}

const HeroListElement: FC<HeroListElementProps> = ({ hero, selectedHeroId, selectHero }) => {
    const handleClickEvent = (heroId: string) => {
        if (heroId === hero.id.toString())
            selectHero(hero)
    }

    return (
        <button type="button" className={selectedHeroId === hero.id ? "selected" : ""} 
        onClick={(e) => handleClickEvent(e.currentTarget.value)} value={hero.id} >
            <span className="badge">{hero.id}</span>
            <span className="name"> {hero.name}</span>
        </button>
    );
}
export default HeroListElement; 