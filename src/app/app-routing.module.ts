import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'artist-search', pathMatch: 'full'},
  { path: 'artist-detail/:id', component: ArtistDetailComponent },
  { path: 'artist-list', component: ArtistListComponent },
  { path: 'album-list', component: AlbumListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'artist-search', component: SearchBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


