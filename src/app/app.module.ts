import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { WebComponentsExampleModule } from './modules/webcomponents-example/webcomponents-example.module';
import { TrackListComponent } from './track-list/track-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AlbumListComponent,
    ArtistListComponent,
    FavoritesComponent,
    SearchBarComponent,
    ArtistDetailComponent,
    ShortNumberPipe,
    TrackListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    FormsModule,
    MatTableModule,
    WebComponentsExampleModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyBMPjidhWDrYFqwgpePqwP6IA4fhXPOKrM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
