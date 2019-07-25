import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { GAMES } from '../data/games';
import { MessageService } from '../services/message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService:MessageService) {}

  getGames(): Observable<Game[]>{
    // this.messageService.add("Game Service: fetched games");
    return of(GAMES);
  }

  getGame(id:number):Observable<Game>{
    // this.messageService.add(`Game service: fetched game id=${id}`)
    return of(GAMES.find(game => game.id === id))
  }


}
