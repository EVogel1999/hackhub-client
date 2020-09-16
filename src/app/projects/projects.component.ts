import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private projectsService: ProjectsService) { }

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectsService.getProjects();
  }

}
