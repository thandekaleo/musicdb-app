import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module';
import { ErrorDetailComponent } from './components/error-detail/error-detail.component';
import { RandomJokeComponent } from './components/random-joke/random-joke.component';
import {
  DadJokeService,
  HttpRequestInterceptor,
  ErrorService
} from './services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchJokeComponent } from './components/search-joke/search-joke.component';
import { HighlightSearchPipe } from './pipes/highlight-search.pipe';

@NgModule({
  declarations: [
    ErrorDetailComponent,
    RandomJokeComponent,
    SearchJokeComponent,
    HighlightSearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [
    DadJokeService,
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicroFrontendModule {}
