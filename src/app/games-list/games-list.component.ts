import { Component } from '@angular/core';
import {Games} from "../shared/models/games";
import {GamesListItemComponent} from "../games-list-item/games-list-item.component";
import {NgForOf} from "@angular/common";

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
  gameList: Games[] =
    [
      {id: 1, name: "TF2", genre: "Shooter", rating: 7, releaseDate: "12/06/2005"},
      {id: 1, name: "Tarkov", genre: "Shooter", rating: 7, releaseDate: "12/06/2015"},
      {id: 2, name: "Dota2", genre: "Moba", rating: 5, releaseDate: "4/06/2015"},
      {id: 3, name: "CSGO", genre: "Shooter", rating: 3, releaseDate: "2/06/2018"},
      {id: 4, name: "Apex", genre: "Shooter", rating: 8, releaseDate: "4/06/2022"},
      {id: 5, name: "COD6", genre: "Shooter", rating: 7, releaseDate: "8/06/2024"},
      {id: 6, name: "Minecraft", genre: "Survival", rating: 7, releaseDate: "7/06/2009"}
    ]

}
