import { FC, useEffect, useState } from "react";
import { Paper, defaultPaper } from "../../models/Paper";
import { useInjection } from "brandi-react";
import { TOKENS } from "../../services/token";
import { useParams } from "react-router-dom";
import './Paper.css';


const PaperPresentation: FC = () => {
    const [refreshKey, setRefreshKey] = useState<number>()
    const paperService = useInjection(TOKENS.paperService);
    const { id } = useParams();
    
    const [paperId, setPaperId] = useState(0)
    const [paper, setPaper] = useState<Paper>(defaultPaper);

    
    const refresh = () => {
        setRefreshKey(Date.now())
    }
    const like = () => {
        paperService.likePaper(paperId)
        refresh()
    }
    const dontLike = () => {
        paperService.dontlikePaper(paperId)
        refresh()
    }


    useEffect(() => {
        console.log(id);
        if (id)
            setPaperId(Number.parseInt(id))
        paperService.getPaper(paperId).then((response) => {
            setPaper(response)
        })
    }, [refreshKey,paperId])

    return (
        <div className="paper-article">
            <h2 className="paper-title">{paper.title}</h2>
            <div className="paper-content">{paper.content}</div>
            <button onClick={like}>Like {paper.iLikeCount}</button>
            <button onClick={dontLike}>Dont Like {paper.iDontLikeCount}</button>
        </div>
    );
};

export default PaperPresentation;