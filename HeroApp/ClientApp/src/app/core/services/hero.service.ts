import { Injectable } from '@angular/core';
import { Hero } from '../classes/Hero'
import { HEROES } from '../../data/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
