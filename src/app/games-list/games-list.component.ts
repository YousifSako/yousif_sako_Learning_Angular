import { Component } from '@angular/core';
import {Games} from "../shared/models/games";
import {GamesListItemComponent} from "../games-list-item/games-list-item.component";
import {NgForOf} from "@angular/common";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [
    GamesListItemComponent,
    NgForOf
  ],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent {

  constructor(private gameService: GameService) {
  }

}
