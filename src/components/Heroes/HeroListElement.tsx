import { FC } from "react";
import { useInjection } from "brandi-react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../../models/Hero";
import { TOKENS } from "../../services/token";

type HeroListElementProps = {
    selectedHeroId?: number,
    hero: Hero,
    selectHero?: (hero: Hero) => void
}

const HeroListElement: FC<HeroListElementProps> = ({ hero, selectedHeroId, selectHero }) => {
    const logger = useInjection(TOKENS.consoleService);
    const navigate = useNavigate();
    const handleClickEvent = (heroId: string) => {
        if (heroId === hero.heroId.toString()){
            if(selectHero!== undefined)
                selectHero(hero)
            logger.add(`Hero ${hero.name} selected`)
            navigate(`/hero/${hero.heroId}`)    
        }
    }

    return (
        <button type="button" className={selectedHeroId !== undefined && selectedHeroId === hero.heroId ? "selected" : ""} 
        onClick={(e) => handleClickEvent(e.currentTarget.value)} value={hero.heroId} >
            <span className="badge">{hero.heroId}</span>
            <span className="name"> {hero.name}</span>
        </button>
    );
}
export default HeroListElement; 