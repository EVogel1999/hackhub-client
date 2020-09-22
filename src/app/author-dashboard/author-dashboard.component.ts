import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../types/project';
import { CreateProjectPopupComponent } from './create-project-popup/create-project-popup.component';

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
    const dialogRef = this.dialog.open(CreateProjectPopupComponent);
    await dialogRef.afterClosed().toPromise()
    this.projects = await this.projectService.getAuthorProjects('');
  }

}
