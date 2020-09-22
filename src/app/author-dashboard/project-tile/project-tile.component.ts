import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Project } from 'src/app/types/project';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { ProjectPopupComponent } from '../project-popup/project-popup.component';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input() project: Project;
  @Output() detectChange = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  async updateProject() {
    const dialogRef = this.dialog.open(ProjectPopupComponent, {
      data: { mode: 'update', params: this.project }
    });
    await dialogRef.afterClosed().toPromise();
    this.detectChange.emit(true);
  }

  async deleteProject() {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: { mode: 'project', params: this.project.id }
    });
    await dialogRef.afterClosed().toPromise();
    this.detectChange.emit(true);
  }
}
