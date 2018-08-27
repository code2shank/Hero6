import { Injectable } from '@angular/core';
import { Hero } from '../classes/Hero'
import { HEROES } from '../../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    if (HEROES.find(hero => hero.id === id)) {
      this.messageService.add(`HeroService: fetched hero id:${id}`)
      return of(HEROES.find(hero => hero.id === id));
    }
    else {
      this.messageService.add(`HeroService: did not find hero id:${id}`)
      let hero: Hero;
      hero.id = null;
      hero.name = null;
      return of(hero);
    }

    }

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //TODO: send the mesaage after fetching the heroes
    this.messageService.add('HeroService : fetched heroes');


    return of(HEROES);
  }

}
