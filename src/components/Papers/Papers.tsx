import { FC, useEffect, useState } from "react"
import { Paper } from "../../models/Paper"
import { useInjection } from "brandi-react";
import { TOKENS } from "../../services/token";
import PaperCard from "./PaperCard";
import { useNavigate } from "react-router-dom";



const Papers: FC = () =>{
    const paperService = useInjection(TOKENS.paperService);
    const navigate = useNavigate();

    const [papers, setPapers] = useState<Paper[]>([])

    useEffect(()=> {
        paperService.getPapers().then((response) =>{
            setPapers(response)
        })
    }, [])

    const goToPaper = (paperId : number) =>{
            navigate(`papers/${paperId}`);
    }
    return(
        <>
        <h1>Heroes Papers</h1>
            {papers.map((paper) =>{
                return(
                    <PaperCard paper={paper} onClick={() => goToPaper(paper.paperId)} />
                )
            })}
        
        
        
        </>
    )
}

export default Papers;