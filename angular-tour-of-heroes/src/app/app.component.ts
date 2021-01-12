import { Component, ViewEncapsulation } from '@angular/core';
import { HeroService } from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class AppComponent {

  constructor(private heroService: HeroService) { }
  title = "Tour of Heroes"

  logSelectedHeroes(){
    this.heroService.getSelectedHero();
  }

}
