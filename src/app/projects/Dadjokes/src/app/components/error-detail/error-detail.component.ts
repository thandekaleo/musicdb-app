import { Component } from '@angular/core';
import { Error } from '../../models/error/error.model';
import { ErrorService } from '../../services';

@Component({
  selector: 'dadjoke-errordetail',
  templateUrl: './error-detail.component.html',
  styleUrls: ['./error-detail.component.scss']
})
export class ErrorDetailComponent {
  errorDetail: Map<string, Error> | undefined;
  constructor(private errorService: ErrorService) {
    this.errorDetail = this.errorService.errorMap;
  }

  closeDetail(event: MouseEvent): void {
    event.preventDefault();
  }

  getJson(text: string): any { // eslint-disable-line
    try {
      return JSON.parse(text); // eslint-disable-line
    } catch {
      return text;
    }
  }
}
