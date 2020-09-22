import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectPopupComponent } from './author-dashboard/project-popup/project-popup.component';
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';
import { ProjectTileComponent } from './author-dashboard/project-tile/project-tile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    AuthorDashboardComponent,
    ProjectTileComponent,
    ProjectPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectPopupComponent]
})
export class AppModule { }
