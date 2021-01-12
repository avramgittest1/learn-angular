import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit { 

 @Input()  hero:Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.selectedHero$.subscribe(selectedHero => {
      console.log("selected hero by BS", selectedHero);
      this.hero = selectedHero;
    })
  }

  

}
 