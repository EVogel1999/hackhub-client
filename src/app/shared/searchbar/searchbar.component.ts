import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  tags: string[] = [];

  constructor(private tagsService: TagsService) { }

  async ngOnInit(): Promise<void> {
    this.tags = await this.tagsService.getTags();
  }

}
