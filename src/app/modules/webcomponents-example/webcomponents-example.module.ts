import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { BrowserModule } from '@angular/platform-browser';
import { RandomJokeComponent } from '../../projects/Dadjokes/src/app/components/random-joke/random-joke.component';
import { SearchJokeComponent } from '../../projects/Dadjokes/src/app/components/search-joke/search-joke.component'
import { SimpleWebComponent } from './components/simple-webcomponent/simple-webcomponent.component';
import { RouterModule } from '@angular/router';
import { MicroFrontendModule } from '../../projects/Dadjokes/src/app/microfrontend.module';
import { ParameterisedWebComponent } from './components/parameterised-webcomponent/parameterised-webcomponent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SimpleWebComponent, ParameterisedWebComponent],
  imports: [
    BrowserModule,
    RouterModule,
    MicroFrontendModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentsExampleModule {
  constructor(private injector: Injector) {
    //create random joke webcomponent
    const randomJokeStrategyFactory = new ElementZoneStrategyFactory(RandomJokeComponent, injector);
    const randomJokeComponent = createCustomElement(RandomJokeComponent, {
      injector,
      strategyFactory: randomJokeStrategyFactory
    });
    customElements.define('random-dadjoke', randomJokeComponent);

    //create search joke webcomponent
    const searchJokeStrategyFactory = new ElementZoneStrategyFactory(SearchJokeComponent, injector);
    const searchJokeComponent = createCustomElement(SearchJokeComponent, {
      injector,
      strategyFactory: searchJokeStrategyFactory
    });
    customElements.define('search-dadjoke', searchJokeComponent);
  }
}
