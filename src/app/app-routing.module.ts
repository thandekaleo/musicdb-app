import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', component: ArtistListComponent },
  { path: 'artist-list', component: ArtistListComponent },
  { path: 'track-list', component: TrackListComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
