import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Games } from "./shared/models/games";
import {NgForOf, NgIf} from "@angular/common";
import {GamesListComponent} from "./games-list/games-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, GamesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yousif-sako-Learning-Angular';
}
