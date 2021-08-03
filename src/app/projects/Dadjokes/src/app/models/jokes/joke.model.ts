export interface Joke {
  joke: string;
  id: string;
}

export interface SearchResults {
  current_page: number;
  limit: number;
  results: Joke[];
  search_term: string;
  total_jokes: number;
  total_pages: number;
}
