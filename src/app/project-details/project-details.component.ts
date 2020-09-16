import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { UserService } from '../services/user.service';
import { Project } from '../types/project';
import { User } from '../types/user';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  author: User;

  constructor(private route: ActivatedRoute, private projectService: ProjectsService, private userService: UserService) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = await this.projectService.getProject(id);
    this.author = await this.userService.getUser(this.project.authorID);
  }

}
