import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../services/projects.service';
import { UserService } from '../services/user.service';
import { Project } from '../types/project';
import { ProjectPopupComponent } from './project-popup/project-popup.component';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.scss']
})
export class AuthorDashboardComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectsService, private userService: UserService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.detectChange();
  }

  async openCreateProjectPopup() {
    const dialogRef = this.dialog.open(ProjectPopupComponent, {
      data: { mode: 'create' }
    });
    await dialogRef.afterClosed().toPromise()
    await this.detectChange();
  }

  async detectChange() {
    const user = (await this.userService.user()).id;
    this.projects = await this.projectService.getAuthorProjects(user);
  }

}
