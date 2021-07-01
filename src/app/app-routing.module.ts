import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'artist-list', pathMatch: 'full'},
  { path: 'artist-list', component: ArtistListComponent },
  { path: 'album-list', component: AlbumListComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
