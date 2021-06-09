import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DeezerService } from '../services/deezer.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('input', { static: true }) input!: ElementRef;
  searchText = '';
  search(){
    this.deezerService.searchArtist(this.searchText).subscribe(({ data }: any) => {
      console.log(data);
      });

    this.deezerService.searchAlbum(this.searchText).subscribe(({ data }: any) => {
      console.log(data);
      });
  }

  constructor(private deezerService: DeezerService) { }

  ngOnInit(): void {
  }

}
