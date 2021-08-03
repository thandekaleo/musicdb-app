import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialComponentsModule } from 'src/app/projects/Dadjokes/src/app/material-components.module';
import { MicroFrontendModule } from 'src/app/projects/Dadjokes/src/app/microfrontend.module';
import { SimpleWebComponent } from './simple-webcomponent.component';

describe('SimpleWebComponent', () => {
  let component: SimpleWebComponent;
  let fixture: ComponentFixture<SimpleWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleWebComponent],
      imports: [MaterialComponentsModule, MicroFrontendModule, HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
