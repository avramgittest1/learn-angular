import {Component, OnInit} from '@angular/core'
import { Hero } from '../hero.interface'
import { HeroService } from '../hero.service'
import {MessageService} from '../message.service'
import { OverAllRatingService } from '../over-all-rating.service'


@Component({
  selector: 'app-messages',
  templateUrl : './messages.component.html',
  styleUrls : ['./messages.component.css']
})

export class MessagesComponent implements OnInit{

  public overAllR = []
  public selectedHero:Hero
 
  
  constructor (public messageService : MessageService, public _overAllRatingService : OverAllRatingService, private heroService : HeroService){}

  ngOnInit():void{
     this._overAllRatingService.getOverAll().subscribe(overAllR => this.overAllR = overAllR)
    console.log("over all ratind",   this.overAllR)
    this.heroService.selectedHero$.subscribe(selectedHero=>this.selectedHero=selectedHero)
   
  }
}