import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Hero } from '../shared/interfaces/hero';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.css']
})
export class HeroSelectionComponent implements OnInit {
  show = false;
  constructor(title: Title) {
    title.setTitle('Select Hero');
  }

  ngOnInit() {
  }

  setHero(hero: Hero) {
    console.log(hero);
  }
}
