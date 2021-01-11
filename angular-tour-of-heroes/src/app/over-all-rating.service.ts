import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Observable, of}  from 'rxjs';
import {Hero} from './hero.interface'

@Injectable({
  providedIn: 'root'
})
export class OverAllRatingService {

  getOverAll():Observable<Hero[]>{
    return of (HEROES)
  }

  constructor() { }
}
