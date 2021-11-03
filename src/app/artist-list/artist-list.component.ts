import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist-response';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  public artists: Artist[] = [];

  constructor(public artistService: DeezerService ) { }

  ngOnInit(): void {
    this.artistService.getTopArtist().subscribe(
      response=>{
        this.artists = response.data;
        console.log(response);
      }
    )
  }

}
