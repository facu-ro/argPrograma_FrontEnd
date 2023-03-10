import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeEditarComponent } from './aboutme-editar.component';

describe('AboutmeEditarComponent', () => {
  let component: AboutmeEditarComponent;
  let fixture: ComponentFixture<AboutmeEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
