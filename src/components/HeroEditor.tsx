import { FC, useEffect, useState } from "react";
import { Hero } from "../models/Hero";

type HeroEditorProps = {
    hero: Hero
}

const HeroEditor: FC<HeroEditorProps> = ({ hero }) => {
    const [currentHero, setCurrentHero] = useState<Hero>(hero)

    const handleNameChange = (value: string) => {
        let currentHeroCopy: Hero = { ...currentHero };
        currentHeroCopy.name = value;
        setCurrentHero(currentHeroCopy);
    }

    useEffect(() => { setCurrentHero(hero) }, [hero.id])
    return (
        <>
            <h2>{hero.name.toUpperCase()} Details</h2>
            <div><span>id: </span>{hero.id}</div>
            <div>
                <label >Hero name: </label>
                <input defaultValue={currentHero.name} onChange={(e) => handleNameChange(e.target.value)}></input>
            </div>
        </>
    );
}

export default HeroEditor;