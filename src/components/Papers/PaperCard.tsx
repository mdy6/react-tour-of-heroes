import { FC } from "react";
import './PaperCard.css';
import { Paper } from "../../models/Paper";

export interface CardProps {
    paper : Paper
    onClick: () => void;
  }


const PaperCard: FC<CardProps> = ({ paper, onClick }) => {
    return (
        <div className="paper-card" onClick={onClick}>
            <h3 className="paper-card-title">{paper.title}</h3>
            <p className="paper-card-description">{paper.description}</p>
        </div>
    );
}

export default PaperCard;