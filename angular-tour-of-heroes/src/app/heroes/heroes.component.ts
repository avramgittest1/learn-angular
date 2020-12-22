import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {
  hero:Hero = {
    name :"Windstorm",
    id : 0
  };

  heroes : Hero[] = HEROES;
  selectedHero : Hero;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(){

  }

  onChange(event){
    console.log(event.target.value)
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

}
