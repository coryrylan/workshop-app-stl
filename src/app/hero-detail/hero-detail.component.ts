import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  heroId: Observable<number>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.heroId = this.activatedRoute.params.map(params => params['id']);
  }

  ngOnInit() {
  }

}
