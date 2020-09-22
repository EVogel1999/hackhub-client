import { Injectable } from '@angular/core';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: Project[] = [
    {
      "id":"5f58d31b5b33d9c07c4dbef4",
      "authorID":"5f581d4a83a089abe222f685",
      "name":"HackHub",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "tags":[
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'}
      ]
    },
    {
      "id":"5f58d31b5b33d9c07c4dbef4",
      "authorID":"5f581d4a83a089abe222f685",
      "name":"HackHub",
      "description":
      "This project!",
      "tags":[
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'}
      ]
    },
    {
      "id":"5f58d31b5b33d9c07c4dbef4",
      "authorID":"5f581d4a83a089abe222f685",
      "name":"HackHub",
      "description":
      "This project!",
      "tags":[
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'}
      ]
    },
    {
      "id":"5f58d31b5b33d9c07c4dbef4",
      "authorID":"5f581d4a83a089abe222f685",
      "name":"HackHub",
      "description":
      "This project!",
      "tags":[
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'},
        {id: '1', name: 'web', description: 'blah'}
      ]
    }
  ];

  constructor() { }

  async searchProjects(query: string, tags: string[]) {

  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getProject(id: string): Promise<Project> {
    return this.projects.find(project => project.id === id);
  }

  async createProject(project: Project): Promise<void> {
    this.projects.push(project);
  }

  async updateProject(project: Partial<Project>) {

  }

  async deleteProject(id: string) {

  }

  async getAuthorProjects(authId: string): Promise<Project[]> {
    return this.projects;
  }
}
