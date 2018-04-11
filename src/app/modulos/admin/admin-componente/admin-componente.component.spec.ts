import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponenteComponent } from './admin-componente.component';

describe('AdminComponenteComponent', () => {
  let component: AdminComponenteComponent;
  let fixture: ComponentFixture<AdminComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
