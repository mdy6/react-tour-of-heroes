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

export const  defaultPaper :Paper ={
  authorId :0,
  content: '',
  description:'',
  heroId: 0,
  iDontLikeCount:0,
  iLikeCount: 0,
  paperId: 0,
  publicationDate: new Date(),
  title:''
}