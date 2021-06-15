import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist-response';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchBarComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef;
  searchText = '';
  searchResults: Artist[] = [];
  search(){
    this.deezerService.searchArtist(this.searchText).subscribe(({ data }: any) => {
      //console.log(data);
      this.searchResults = data;
      });
  }

  constructor(private deezerService: DeezerService) { }


  ngOnInit(): void {
  }

}

