import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  activeType = 'human';
  constructor() { }

  ngOnInit() {
  }

  setFilter(type: string) {
    if (type === 'human') {
      this.activeType = 'human';
    }

    if (type === 'droid') {
      this.activeType = 'droid';
    }

    if (type === 'all') {
      this.activeType = 'all';
    }
  }
}
