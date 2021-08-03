import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchResults } from '../../models/jokes/joke.model';
import { DadJokeService } from '../../services/jokes/dadjoke.service';

@Component({
  selector: 'dadjoke-search',
  templateUrl: './search-joke.component.html',
  styleUrls: ['./search-joke.component.scss']
})
export class SearchJokeComponent implements OnInit, OnChanges {
  @Input() query: string | undefined;
  searchResults: SearchResults | undefined;
  isLoading = false;
  searchTerm = '';

  constructor(private route: ActivatedRoute, private dadJokeService: DadJokeService) {
    this.searchTerm = this.query || this.route.snapshot.paramMap.get('query') || '';
  }

  ngOnInit(): void {
    this.searchJoke();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchTerm = changes.query.currentValue;
    this.searchJoke();
  }

  private searchJoke(): void {
    this.isLoading = true;
    this.searchResults = undefined;
    this.dadJokeService.searchJokes(this.searchTerm).subscribe((data) => {
      this.searchResults = data as SearchResults;
      this.isLoading = false;
    });
  }
}
