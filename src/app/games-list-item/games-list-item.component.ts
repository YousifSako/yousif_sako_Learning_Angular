import {Component, Input} from '@angular/core';
import {Games} from "../shared/models/games";
import {NgForOf, NgIf} from "@angular/common";
import {gameList} from "../data/mock-content";

@Component({
  selector: 'app-games-list-item',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './games-list-item.component.html',
  styleUrl: './games-list-item.component.css'
})
export class GamesListItemComponent {
  @Input() game?: Games;
  @Input() item?: Games;
  selectedGame?: Games;
  //function to set which student to display
  selectGame(games: Games): void {
    this.selectedGame = games;
  }

  protected readonly gameList = gameList;
}
