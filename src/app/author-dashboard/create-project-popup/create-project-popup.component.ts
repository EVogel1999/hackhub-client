import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/types/project';

@Component({
  selector: 'app-create-project-popup',
  templateUrl: './create-project-popup.component.html',
  styleUrls: ['./create-project-popup.component.scss']
})
export class CreateProjectPopupComponent implements OnInit {

  model: Project = {
    authorID: '',
    name: '',
    description: '',
    repositoryURL: null
  }

  constructor(private projectsService: ProjectsService, private dialogRef: MatDialogRef<CreateProjectPopupComponent>, @Inject(MAT_DIALOG_DATA) data) { }

  ngOnInit(): void {
  }

  submit() {
    this.projectsService.createProject(this.model);
    this.cancel();
  }

  cancel() {
    this.dialogRef.close();
  }

}
