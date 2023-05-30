import { FC } from "react";
import { Hero } from "../models/Hero";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";

type HeroListElementProps = {
    selectedHeroId: number,
    hero: Hero,
    selectHero: (hero: Hero) => void
}

const HeroListElement: FC<HeroListElementProps> = ({ hero, selectedHeroId, selectHero }) => {
    const logger = useInjection(TOKENS.consoleService);
    const handleClickEvent = (heroId: string) => {
        if (heroId === hero.id.toString()){
            selectHero(hero)
            logger.add(`Hero ${hero.name} selected`)
        }
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