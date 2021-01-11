import {Component, OnInit} from '@angular/core'
import {MessageService} from '../message.service'
import { OverAllRatingService } from '../over-all-rating.service'


@Component({
  selector: 'app-messages',
  templateUrl : './messages.component.html',
  styleUrls : ['./messages.component.css']
})

export class MessagesComponent implements OnInit{

  public overAllR = []
  constructor (public messageService : MessageService, public _overAllRatingService : OverAllRatingService){}

  ngOnInit():void{
     this._overAllRatingService.getOverAll().subscribe(overAllR => this.overAllR = overAllR)
    console.log("over all ratind",   this.overAllR)
  }
}