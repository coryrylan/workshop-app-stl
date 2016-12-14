import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/do';

import { Hero } from '../shared/interfaces/hero';
import { HeroDataService } from './../shared/services/hero-data.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Observable<Hero>;

  constructor(private activatedRoute: ActivatedRoute, private heroDataService: HeroDataService) {
    this.hero = this.activatedRoute.params
      .map(params => params['id'])
      .mergeMap(id => this.heroDataService.getHero(id)).share();

    // route.params.map(params => params['id']).subscribe(id => {
    //   this.heroDataService.getHero(id).subscribe(hero => {
    //     this.hero = hero;
    //   });
    // });
  }

  ngOnInit() {
  }

}
