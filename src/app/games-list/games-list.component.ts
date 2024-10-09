import {Component, OnInit} from '@angular/core';
import {Games} from "../shared/models/games";
import {GamesListItemComponent} from "../games-list-item/games-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-games-list',
  standalone: true,
    imports: [
        GamesListItemComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent implements OnInit{
  gameList: Games[] = [];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    //This lifecycle hook is a good place to fetch and init our data
    this.gameService.getGames().subscribe({
      next: (data: Games[]) => this.gameList = data,
      error: err => console.error("Error fetching Games", err),
      complete: () => console.log("Game data fetch complete!")
    })
  }

  selectedItem?: Games;
  selectGame(student: Games): void {
    this.selectedItem = student;
  }

}
