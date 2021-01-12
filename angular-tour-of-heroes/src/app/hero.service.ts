import { Injectable } from '@angular/core';
import { Hero } from './hero.interface';
import { HEROES } from './mock-heroes';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  selectedHero$ = new BehaviorSubject<Hero>(null)

  constructor(private messageService : MessageService) { }

 

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService : Get featched heroes')
    return of(HEROES);
  }

  getSelectedHero(){
    const hero = this.selectedHero$.getValue()
    console.log(hero)
  }
}
