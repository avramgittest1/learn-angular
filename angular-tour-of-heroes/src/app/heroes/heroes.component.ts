import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {


  heroes : Hero[];
  selectedHero : Hero;
  constructor(private heroService:HeroService) {

   }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(){

  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

}
