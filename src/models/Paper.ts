import { Id } from "./Id";



export interface Paper {
  paperId: Id;
  title: string;
  description: string;
  content: string;
  publicationDate: Date;
  iLikeCount: number;
  iDontLikeCount: number;
  heroId: number;
  authorId: number;
}


export type InputPaper = Paper
export type OutputPaper = Paper