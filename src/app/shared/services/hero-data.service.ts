import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Hero } from '../interfaces/hero';
const api = 'http://swapi.co/api';

@Injectable()
export class HeroDataService {

  constructor(private http: Http) { }

  getData(): Observable<Hero[]> {
    return this.http.get(`${api}/people/`)
      .map(res => res.json().results);
  }
}
