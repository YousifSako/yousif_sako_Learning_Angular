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
}
