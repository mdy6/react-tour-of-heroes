import { OutputPaper, Paper } from "../models/Paper";
import { injected } from 'brandi';
import { ApiInstance } from "./api/ApiInstance";



export class PaperApiService implements PaperService{
    constructor(){
    }
    async getPapers(): Promise<Paper[]> {
        var papers = await ApiInstance.get('papers');
        return papers.data as OutputPaper[];
    }
    async getPaper(paperId: number): Promise<Paper> {
        var paper = await ApiInstance.get(`papers/${paperId}`);
        return paper.data as OutputPaper;
    }

    async likePaper(paperId: number): Promise<number> {
        var currentPaper = await this.getPaper(paperId);
        currentPaper.iLikeCount++;
        return await this.editPaper(currentPaper);
    }
    async dontlikePaper(paperId: number): Promise<number> {
        var currentPaper = await this.getPaper(paperId);
        currentPaper.iDontLikeCount++;
        return await this.editPaper(currentPaper);
    }
    async deletePaper(paperId: number): Promise<void> {
        var deletePaper =await ApiInstance.delete(`papers/${paperId}`);
        return deletePaper.data
    }
    async editPaper(paper: Paper): Promise<number> {
        var postResponse = await ApiInstance.post(`papers/publish`, paper);
        return postResponse.data
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
