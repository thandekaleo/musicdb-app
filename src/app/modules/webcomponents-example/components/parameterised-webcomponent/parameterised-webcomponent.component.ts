import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-parameterised-webcomponent',
  templateUrl: './parameterised-webcomponent.component.html',
  styleUrls: ['./parameterised-webcomponent.component.scss']
})
export class ParameterisedWebComponent implements AfterViewInit, OnDestroy {
  @ViewChild('input', { static: true }) input!: ElementRef;
  searchText = '';
  searchQuery = '';
  searchSpinner = false;
  searchSub: Subscription | undefined;

  ngAfterViewInit(): void {
    this.searchSub = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this.search();
        })
      )
      .subscribe();
  }

  search(): void {
    this.searchQuery = this.searchText;
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }
}
