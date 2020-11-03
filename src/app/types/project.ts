import { Tag } from './tags';

export class Project {
    _id?: string;
    authorID: string;
    name: string;
    description: string;
    repositoryURL?: string;
    tags?: Tag[];
}