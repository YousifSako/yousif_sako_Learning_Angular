import {Component, Input} from '@angular/core';
import {Games} from "../shared/models/games";

@Component({
  selector: 'app-games-list-item',
  standalone: true,
  imports: [],
  templateUrl: './games-list-item.component.html',
  styleUrl: './games-list-item.component.css'
})
export class GamesListItemComponent {
  @Input() game?: Games;
}
