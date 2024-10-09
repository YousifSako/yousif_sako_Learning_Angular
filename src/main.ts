import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes} from "@angular/router";
import {GamesListItemComponent} from "./app/games-list-item/games-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {GamesListComponent} from "./app/games-list/games-list.component";

const routes: Routes = [
  {path:'', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games', component: GamesListItemComponent},
  {path: 'games/modify-game', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('bootstrap successful'))
