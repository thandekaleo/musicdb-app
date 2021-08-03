import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorService } from './services';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ErrorDetailComponent } from './components/error-detail/error-detail.component';
import { Error } from './models/error/error.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'FunFacts';
  error = false;
  displayErrorDetail = false;
  errorSubscription: Subscription | undefined;
  errorDetail: Map<string, Error> | undefined;

  constructor(private errorService: ErrorService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.errorSubscription = this.errorService.errorSub
    .pipe(delay(0))
    .subscribe((error) => {
      this.error = error;
      this.errorDetail = this.errorService.errorMap;
    });
  }

  ngOnDestroy(): void {
    this.errorSubscription?.unsubscribe();
  }

  refreshPage(): void {
    window.location.reload();
  }

  toggleErrorDetail(): void {
    this.dialog.open(ErrorDetailComponent, {
      minWidth: '100vw',
      minHeight: '100vh',
      disableClose: true,
      hasBackdrop: false
    });
  }
}
