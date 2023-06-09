import { FC, useEffect, useState } from "react";
import { Hero, defaultHero } from "../models/Hero";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useInjection } from "brandi-react";
import { TOKENS } from "../services/token";
import { BackButton } from "./utils/BackButton";


const HeroEditor: FC = () => {
    const heroService = useInjection(TOKENS.heroService);

    const [currentHero, setCurrentHero] = useState<Hero>(defaultHero)
    const { id } = useParams();

    const getCurrentHero = async () =>{
        if(id){
            let currentHeroId: number = Number.parseInt(id);
            let heroResponse = await heroService.getHero(currentHeroId)
            setCurrentHero(heroResponse)
        }
    }
    const handleNameChange = (value: string) => {
        let currentHeroCopy: Hero = { ...currentHero };
        console.log(currentHeroCopy)
        currentHeroCopy.name = value;
        setCurrentHero(currentHeroCopy);
    }

    const navigate = useNavigate();

    const save = () =>{
        console.log(currentHero)
        heroService.updateHero(currentHero);
        navigate('/heroes')
    }


    useEffect(() => { getCurrentHero() }, [id])
    return (
        <>
            <h2>{currentHero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>{currentHero.heroId}</div>
            <div>
                <label >Hero name: </label>
                <input id="updateheroid" value={currentHero.name} onChange={(e) => handleNameChange(e.target.value)}></input>
            </div>
            <button type="button" onClick={save}>Save</button>
            <BackButton/>
        </>
    );
}

export default HeroEditor;