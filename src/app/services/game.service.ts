import { Injectable } from '@angular/core';
import {gameList} from "../data/mock-content";
import {Games} from "../shared/models/games";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: Games[] = gameList;

  constructor() { }

  getGames(): Observable<Games[]>{
    return of(gameList);
  }

  addGame(newGame:Games) : Observable<Games[]>{
    this.games.push(newGame)
    return of(this.games);
  }

  updateGame(updatedGame: Games): Observable<Games[]> {
    const index = this.games.findIndex(game => game.id === updatedGame.id);
    if (index !== -1) {
      this.games[index] = updatedGame;
    }
    return of(this.games);
  }

  deleteGame(gameId: number): Observable<Games[]> {
    this.games = this.games.filter(game => game.id !== gameId);
    return of(this.games);
  }
  getGameById(gameId: number): Observable<Games | undefined> {
    const game = this.games.find(game => game.id === gameId);
    return of(game);
  }
}
