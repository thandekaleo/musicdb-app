import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialComponentsModule } from '../../material-components.module';
import { RandomJokeComponent } from './random-joke.component';

describe('RandomJokeComponent', () => {
  let component: RandomJokeComponent;
  let fixture: ComponentFixture<RandomJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomJokeComponent],
      imports: [
        MaterialComponentsModule, HttpClientModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
