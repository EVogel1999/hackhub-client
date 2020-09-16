import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private tags = [
    'All',
    'Web',
    'Database',
    'API',
    'Fullstack',
    'DevOps',
    'Operating Systems',
    'Embedded Systems',
    'Machine Learning',
    'Game Development',
    'Cloud Computing',
    'Programming Languages'
  ];;

  constructor() { }

  async getTags(): Promise<string[]> {
    return this.tags;
  }
}
