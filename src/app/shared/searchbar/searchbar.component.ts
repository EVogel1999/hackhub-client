import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  tags: string[] = [
    'All',
    'Web',
    'Database',
    'API',
    'Fullstack',
    'DevOps',
    'Operating Systems',
    'Embedded Systems',
    'Machine Learning',
    'Game Development',
    'Cloud Computing',
    'Programming Languages'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
