import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/classes/hero';
import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

 selectedHero: Hero;

hero : Hero = {
id: 1,
name: 'Widstrom'
}


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
