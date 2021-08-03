import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../models/album-response';
import { Artist } from '../models/artist-response';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})

export class ArtistDetailComponent {
  YearPipe: any;
  artistID: string = '';

  artist: Artist = {
    id: 0,
    link: '',
    name: '',
    nb_fan: 0,
    nb_album: 0,
    picture: '',
    picture_big:'',
    picture_medium:'',
    picture_small:'',
    picture_xl:'',
    radio:false,
    tracklist:'',
    type:'',
  };

  album: Album [] = [{
    id: 0,
    title: '',
    upc: 0,
    link: '',
    share: '',
    cover: '',
    cover_small: '',
    cover_medium: '',
    cover_big: '',
    cover_xl: '',
    md5_image: '',
    genre_id: 0,
    nb_tracks: 0,
    duration: 0,
    release_date:'',
  }];

  total = 0;
  constructor(private activeRoute: ActivatedRoute, private deezerService: DeezerService) {
    this.activeRoute.queryParams.subscribe((qp) => {
      console.log('Get Router Params:', this.activeRoute.snapshot);
      this.artistID = this.activeRoute.snapshot.params['id'];


      this.deezerService.getArtist (this.artistID).subscribe((data: any) => {
        this.artist = data;
      });

      this.deezerService.getArtistAlbum (this.artistID).subscribe(({data, next, total}) => {

        this.album = data;
        this.total = total;

        this.deezerService.getArtistAlbum (this.artistID).subscribe(({data, next, total}) => {
          console.log(next);
          console.log(total);
          this.album = data;
        });
      });
    });
  }
}
