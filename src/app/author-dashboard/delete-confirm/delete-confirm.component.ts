import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  mode: string;
  id: string;

  constructor(private projectsService: ProjectsService, private dialogRef: MatDialogRef<DeleteConfirmComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.mode = data.mode;
    this.id = data.params
  }

  ngOnInit(): void {
  }

  async submit() {
    await this.projectsService.deleteProject(this.id);
    this.cancel();
  }

  cancel() {
    this.dialogRef.close();
  }

}
