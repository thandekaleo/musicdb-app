import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialComponentsModule } from 'src/app/projects/Dadjokes/src/app/material-components.module';
import { MicroFrontendModule } from 'src/app/projects/Dadjokes/src/app/microfrontend.module';

import { ParameterisedWebComponent } from './parameterised-webcomponent.component';

describe('ParameterisedWebComponent', () => {
  let component: ParameterisedWebComponent;
  let fixture: ComponentFixture<ParameterisedWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParameterisedWebComponent],
      imports: [MaterialComponentsModule, MicroFrontendModule, HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterisedWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
