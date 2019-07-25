import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../models/game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public gameServivce:GameService) { }

  games:Game[];

  ngOnInit() {
    this.getGames();
  }

  getGames():void{
    this.gameServivce.getGames().subscribe(games => this.games = games.slice(1,5))
  }

}
