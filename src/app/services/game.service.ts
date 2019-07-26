import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { GAMES } from '../data/games';
import { MessageService } from '../services/message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameList = GAMES;

  constructor(private messageService:MessageService) {}

  setGames(games:Game[]):void{
    this.gameList = games;
  }

  getGames(): Observable<Game[]>{
    // this.messageService.add("Game Service: fetched games");
    return of(this.gameList);
  }

  getGame(id:number):Observable<Game>{
    // this.messageService.add(`Game service: fetched game id=${id}`)
    return of(this.gameList.find(game => game.id === id))
  }


}
