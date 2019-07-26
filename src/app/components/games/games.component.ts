import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import {GameService} from '../../services/game.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void{
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  onGameDrop(event: CdkDragDrop<string[]>) {
    // console.log("prev " + event.previousIndex + " " + this.games[event.previousIndex].name + " curr " + event.currentIndex + " " + this.games[event.currentIndex].name);

    moveItemInArray(this.games, event.previousIndex, event.currentIndex);

    this.swapGameId(event.previousIndex, event.currentIndex);

    this.gameService.setGames(this.games);
  }

  swapGameId(prev:number,curr:number):void{
    var tempGameId = this.games[prev].id;

    this.games[prev].id = this.games[curr].id;
    this.games[curr].id = tempGameId;
  }

}
