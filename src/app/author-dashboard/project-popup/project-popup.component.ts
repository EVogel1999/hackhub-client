import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-project-popup',
  templateUrl: './project-popup.component.html',
  styleUrls: ['./project-popup.component.scss']
})
export class ProjectPopupComponent implements OnInit {

  mode: string;

  model: Project = {
    authorID: '',
    name: '',
    description: '',
    repositoryURL: null
  }

  constructor(private projectsService: ProjectsService, private dialogRef: MatDialogRef<ProjectPopupComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.mode = data.mode;
    if (this.mode === 'update') {
      this.model = data.params;
    }
  }

  ngOnInit(): void {
  }

  async submit() {
    switch(this.mode) {
      case 'create':
        await this.projectsService.createProject(this.model);
        break;
      case 'update':
        await this.projectsService.updateProject(this.model);
        break;
    }
    
    this.cancel();
  }

  cancel() {
    this.dialogRef.close();
  }

}
