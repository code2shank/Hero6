import { Injectable } from '@angular/core';
import { Hero } from '../classes/Hero'
import { HEROES } from '../../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
