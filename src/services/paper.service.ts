import { Paper } from "../models/Paper";
import { injected } from 'brandi';
import { ApiInstance } from "./api/ApiInstance";



export class PaperApiService implements PaperService{
    
    constructor(){

    }
    getPapers(): Promise<Paper[]> {
        throw new Error("Method not implemented.");
    }
    getPaper(paperId: number): Promise<Paper> {
        throw new Error("Method not implemented.");
    }
    likePaper(paperId: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    dontlikePaper(paperId: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    deletePaper(paperId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    editPaper(paper: Paper): Promise<number> {
        throw new Error("Method not implemented.");
    }
    
    
}
export interface PaperService {
    getPapers(heroId? : number): Promise<Paper[]>;
    getPaper(paperId: number): Promise<Paper>;
    likePaper(paperId: number): Promise<number>;
    dontlikePaper(paperId: number): Promise<number>;
    deletePaper(paperId: number): Promise<void>;
    editPaper(paper: Paper): Promise<number>;
    
}
injected(PaperApiService)
