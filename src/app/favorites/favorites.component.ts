import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  latitude = -25.853311268034968;
  longitude = 28.19204716931305;

  constructor() { }

  ngOnInit(): void {
  }

}
