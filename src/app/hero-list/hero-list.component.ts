import { Component, OnInit, Output, EventEmitter } from '@angular/core';

const heroes = [{
  'name': 'Beru Whitesun Lars',
  'birthday': '47BBY',
  'weight': '75 kg',
  'height': 62,
  'strength': 13,
  'dexterity': 6,
  'hair_color': 'Brown',
  'race': 'Human',
  'sex': 'Female',
  'statPref': 'str'
},{
  'name': 'Biggs Darklighter',
  'birthday': '24BBY',
  'weight': '84 KG',
  'height': 67,
  'strength': 14,
  'dexterity': 6,
  'hair_color': 'Black',
  'race': 'Human',
  'sex': 'Male',
  'statPref': 'str'
},{
  'name': 'C-3P0',
  'birthday': '112BBY',
  'weight': '75 kg',
  'height': 62,
  'strength': 13,
  'dexterity': 6,
  'hair_color': 'N/A',
  'race': 'Droid',
  'sex': 'N/A',
  'statPref': 'str'
},{
  'name': 'Darth Vader',
  'birthday': '41.9BBy',
  'weight': '136 kg',
  'height': 75,
  'strength': 17,
  'dexterity': 6,
  'hair_color': 'None',
  'race': 'Human',
  'sex': 'Male',
  'statPref': 'str'
},{
  'name': 'Leia Organa',
  'birthday': '19BBY',
  'weight': ' 49 kg',
  'height': 54,
  'strength': 11,
  'dexterity': 7,
  'hair_color': 'Brown',
  'race': 'Human',
  'sex': 'Female',
  'statPref': 'dex'
},{
  'name': 'Luke Skywalker',
  'birthday': '19BBY',
  'weight': '77 kg',
  'height': 64,
  'strength': 13,
  'dexterity': 6,
  'hair_color': 'Blond',
  'race': 'Human',
  'sex': 'Male',
  'statPref': 'str'
},{
  'name': 'Obi-wan Kenobi',
  'birthday': '57BBY',
  'weight': '77 kg',
  'height': 67,
  'strength': 13,
  'dexterity': 6,
  'hair_color': 'Auburn, White',
  'race': 'Human',
  'sex': 'Male',
  'statPref': 'str'
},{
  'name': 'Owen Lars',
  'birthday': '52BBY',
  'weight': '120 kg',
  'height': 66,
  'strength': 16,
  'dexterity': 6,
  'hair_color': 'Brown, Gey',
  'race': 'Human',
  'sex': 'Male',
  'statPref': 'str'
},{
  'name': 'R2D2',
  'birthday': '33BBY',
  'weight': '32 kg',
  'height': 36,
  'strength': 8,
  'dexterity': 10,
  'hair_color': 'N/A',
  'race': 'Droid',
  'sex': 'N/A',
  'statPref': 'dex'
},{
  'name': 'R5-D4',
  'birthday': 'Unknown',
  'weight': '32 kg',
  'height': 62,
  'strength': 8,
  'dexterity': 10,
  'hair_color': 'N/A',
  'race': 'Droid',
  'sex': 'N/A',
  'statPref': 'dex'
}];

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  @Output() select = new EventEmitter();
  heroes = heroes;
  constructor() { }

  ngOnInit() {
  }

  emitHero(hero) {
    this.select.emit(hero);
  }
}
