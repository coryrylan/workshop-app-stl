import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../shared/interfaces/hero';
import { HeroDataService } from './../shared/services/hero-data.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Output() select = new EventEmitter();
  heroes: Observable<Hero[]>;

  constructor(private heroDataService: HeroDataService) {
    this.heroes = this.heroDataService.getData();
  }

  ngOnInit() {
  }

  emitHero(hero) {
    this.heroDataService.getData();
    this.select.emit(hero);
  }
}
