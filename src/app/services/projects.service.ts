import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../types/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  async searchProjects(query: string, tags: string[]) {

  }

  async getProjects(): Promise<Project[]> {
    return await this.http.get<Project[]>(`${environment.BASE_API_URL}/projects`).toPromise();
  }

  async getProject(id: string): Promise<Project> {
    return await this.http.get<Project>(`${environment.BASE_API_URL}/projects/${id}`).toPromise();
  }

  async createProject(project: Project): Promise<void> {
    await this.http.post(`${environment.BASE_API_URL}/projects`, project, { withCredentials: true }).toPromise();
  }

  async updateProject(id: string, project: Partial<Project>) {
    await this.http.patch(`${environment.BASE_API_URL}/projects/${id}`, project, { withCredentials: true }).toPromise();
  }

  async deleteProject(id: string) {
    await this.http.delete(`${environment.BASE_API_URL}/projects/${id}`).toPromise();
  }

  async getAuthorProjects(authId: string): Promise<Project[]> {
    return await  this.http.get<Project[]>(`${environment.BASE_API_URL}/users/${authId}/projects`).toPromise();
  }
}
