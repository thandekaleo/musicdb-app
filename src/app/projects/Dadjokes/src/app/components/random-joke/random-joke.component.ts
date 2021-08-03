import { Component, OnInit } from '@angular/core';
import { Joke } from '../../models/jokes/joke.model';
import { DadJokeService } from '../../services/jokes/dadjoke.service';

@Component({
  selector: 'dadjoke-random',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss']
})
export class RandomJokeComponent implements OnInit {
  joke: Joke | undefined;
  isLoading = false;

  constructor(private dadJokeService: DadJokeService) {}

  ngOnInit(): void {
    this.getJoke();
  }

  private getJoke(): void {
    this.isLoading = true;
    this.joke = undefined;
    this.dadJokeService.getRandom().subscribe((data) => {
      this.joke = data as Joke;
      this.isLoading = false;
    });
  }

  loadNewJoke(): void {
    this.getJoke();
  }
}
