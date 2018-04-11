import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaComponenteComponent } from './empresa-componente.component';

describe('EmpresaComponenteComponent', () => {
  let component: EmpresaComponenteComponent;
  let fixture: ComponentFixture<EmpresaComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
