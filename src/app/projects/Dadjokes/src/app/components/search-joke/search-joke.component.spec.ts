import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../routing/app-routing.module';
import { MaterialComponentsModule } from '../../material-components.module';
import { SearchJokeComponent } from './search-joke.component';

describe('SearchJokeComponent', () => {
  let component: SearchJokeComponent;
  let fixture: ComponentFixture<SearchJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchJokeComponent],
      imports: [
        MaterialComponentsModule, HttpClientModule, RouterTestingModule.withRoutes(routes)
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
