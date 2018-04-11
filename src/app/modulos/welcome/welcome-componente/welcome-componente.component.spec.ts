import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponenteComponent } from './welcome-componente.component';

describe('WelcomeComponenteComponent', () => {
  let component: WelcomeComponenteComponent;
  let fixture: ComponentFixture<WelcomeComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
