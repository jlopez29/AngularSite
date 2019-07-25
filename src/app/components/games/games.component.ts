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

  onTrackDrop(event: CdkDragDrop<Game[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
