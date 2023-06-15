import { FC, useEffect, useState } from "react"
import { Paper } from "../../models/Paper"
import { useInjection } from "brandi-react";
import { TOKENS } from "../../services/token";
import PaperCard from "./PaperCard";
import { NavigateOptions, redirect, useNavigate, useParams } from "react-router-dom";
import { Hero, defaultHero } from "../../models/Hero";



const Papers: FC= () => {
    const paperService = useInjection(TOKENS.paperService);
    const heroService = useInjection(TOKENS.heroService);

    const { heroId } = useParams();

    const navigate = useNavigate();

    const [papers, setPapers] = useState<Paper[]>([])
    const [currentHero, setCurrentHero]= useState<Hero>(defaultHero);

    const getCurrentHero = async () =>{
        if(heroId){
            let heroResponse = await heroService.getHero( Number.parseInt(heroId))
            setCurrentHero(heroResponse)
        }
    }
    useEffect(() => {
        getCurrentHero();
        paperService.getPapers().then((response) => {
            setPapers(heroId ? (response as Paper[]).filter(h => h.heroId == Number.parseInt(heroId)) : response)
        })
    }, [currentHero.heroId])

    const goToPaper = (paperId: number) => {
        navigate(`/papers/${paperId}`);
    }
    return (
        <>
            <h2>Heroes Papers</h2>
            {papers.length === 0 ?<div>No Papers founded on {currentHero.name} </div>:
                        <div className="paper-article-container">

                        {papers.map((paper) => {
                            return (
                                <PaperCard key={paper.paperId} paper={paper} onClick={() => goToPaper(paper.paperId)} />
                            )
                        })}
    
    
    
                </div>
            }

        </>
    )
}

export default Papers;