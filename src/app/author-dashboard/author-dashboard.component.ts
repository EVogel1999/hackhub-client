import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../types/project';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.scss']
})
export class AuthorDashboardComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectsService) { }

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectService.getAuthorProjects('');
  }

}
