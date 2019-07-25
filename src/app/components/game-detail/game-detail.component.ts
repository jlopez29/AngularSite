import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})

export class GameDetailComponent implements OnInit {

  @Input() game: Game;

  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private gameService:GameService
  ) { }

  ngOnInit() {
    this.getGame();
  }

  getGame():void{
    const id = +this.route.snapshot.paramMap.get('id');

    this.gameService.getGame(id).subscribe(game => this.game = game);
  }

}
