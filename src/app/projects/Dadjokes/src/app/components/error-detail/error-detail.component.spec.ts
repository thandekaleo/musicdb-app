import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from '../../material-components.module';
import { ErrorDetailComponent } from './error-detail.component';
import { ErrorService } from '../../services';

const errorServiceStub: Partial<ErrorService> = {};

describe('ErrorDetailComponent', () => {
  let component: ErrorDetailComponent;
  let fixture: ComponentFixture<ErrorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorDetailComponent],
      imports: [
        RouterTestingModule,
        MaterialComponentsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [{ provide: ErrorService, useValue: errorServiceStub }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
