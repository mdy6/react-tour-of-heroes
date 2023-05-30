import { FC, useState } from "react";
import { Hero } from "../models/Hero";

const HeroEditor: FC<Hero> = (hero) => {
    const [currentHero, setCurrentHero] = useState<Hero>(hero)

    const handleNameChange = (value: string) => {
        let currentHeroCopy: Hero = { ...currentHero };
        currentHeroCopy.name = value;
        setCurrentHero(currentHeroCopy);
    }
    return (
        <>
            <div>
                <label >Hero name: </label>
                <input defaultValue={currentHero.name} onChange={(e) => handleNameChange(e.target.value)}></input>
            </div>
        </>
    );
}

export default HeroEditor;