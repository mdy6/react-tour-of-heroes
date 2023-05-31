import { FC, useEffect, useState } from "react";
import { Hero, defaultHero } from "../models/Hero";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";


const HeroEditor: FC = () => {
    const heroService = useInjection(TOKENS.heroService);

    const [currentHero, setCurrentHero] = useState<Hero>(defaultHero)
    const { id } = useParams();

    const getCurrentHero =() =>{
        if(id){
            let currentHeroId: number = Number.parseInt(id);
            heroService.getHero(currentHeroId)
            .subscribe(hero => setCurrentHero(hero))
        }
    }
    const handleNameChange = (value: string) => {
        let currentHeroCopy: Hero = { ...currentHero };
        currentHeroCopy.name = value;
        setCurrentHero(currentHeroCopy);
    }

    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    }
    useEffect(() => { getCurrentHero() }, [currentHero.id])
    return (
        <>
            <h2>{currentHero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>{currentHero.id}</div>
            <div>
                <label >Hero name: </label>
                <input defaultValue={currentHero.name} onChange={(e) => handleNameChange(e.target.value)}></input>
            </div>
            <button type="button" onClick={goBack}>Go back</button>
        </>
    );
}

export default HeroEditor;