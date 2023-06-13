import { FC, useEffect, useState } from "react";
import { Hero, defaultHero } from "../../models/Hero";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useInjection } from "brandi-react";
import { TOKENS } from "../../services/token";
import { BackButton } from "../utils/BackButton";


const HeroEditor: FC = () => {
    const heroService = useInjection(TOKENS.heroService);

    const [currentHero, setCurrentHero] = useState<Hero>(defaultHero)
    const {  heroId } = useParams();

    const getCurrentHero = async () =>{
        if(heroId){
            let heroResponse = await heroService.getHero( Number.parseInt(heroId))
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

    const deleteHero = () =>{
        heroService.deleteHero(currentHero.heroId);
        navigate('/heroes')
    }
    const save = () =>{
        heroService.updateHero(currentHero);
        navigate('/heroes')
    }

    const goToPapers = () =>{
        navigate(`/hero/${currentHero.heroId}/papers`)
    }


    useEffect(() => { getCurrentHero() }, [heroId])
    return (
        <>
            <h2>{currentHero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>{currentHero.heroId}</div>
            <div>
                <label >Hero name: </label>
                <input id="updateheroid" value={currentHero.name} onChange={(e) => handleNameChange(e.target.value)}></input>
            </div>
            <button type="button" onClick={goToPapers}>See Papers</button>

            <button type="button" onClick={save}>Save</button>
            <button type="button" onClick={deleteHero}>Delete</button>

            <BackButton/>
        </>
    );
}

export default HeroEditor;