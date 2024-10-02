import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Games } from "./shared/models/games";
import {NgForOf, NgIf} from "@angular/common";
import {GamesListComponent} from "./games-list/games-list.component";
import {gameList} from "./data/mock-content";
import {GamesListItemComponent} from "./games-list-item/games-list-item.component";
import {GameService} from "./services/game.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, GamesListComponent, GamesListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'yousif-sako-Learning-Angular';

  constructor(private gameService: GameService) {
  }

  gameItem: Games | undefined;
  ngOnInit(): void {
    this.gameService.getGameById(5).subscribe((gameItem) =>{
      this.gameItem = gameItem;
    });
  }
  protected readonly gameList = gameList;
}

