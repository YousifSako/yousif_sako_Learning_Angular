import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes} from "@angular/router";
import {GamesListComponent} from "./app/games-list/games-list.component";
import {GamesListItemComponent} from "./app/games-list-item/games-list-item.component";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const routes: Routes = [
  {path:'', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games', component: GamesListComponent},
  {path: 'games/:id', component: GamesListItemComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('bootstrap successful'))
