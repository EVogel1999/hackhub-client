import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../types/project';
import { ProjectPopupComponent } from './project-popup/project-popup.component';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.scss']
})
export class AuthorDashboardComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectsService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectService.getAuthorProjects('');
  }

  async openCreateProjectPopup() {
    const dialogRef = this.dialog.open(ProjectPopupComponent, {
      data: { mode: 'create' }
    });
    await dialogRef.afterClosed().toPromise()
    this.projects = await this.projectService.getAuthorProjects('');
  }

}
