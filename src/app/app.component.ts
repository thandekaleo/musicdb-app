import { Component, OnInit } from '@angular/core';
import { DeezerService } from './services/deezer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  Users: any = [];

  constructor(public deezerService: DeezerService) { }

  ngOnInit() {

  }


}
