import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarnotasComponent } from './agregarnotas.component';

describe('AgregarnotasComponent', () => {
  let component: AgregarnotasComponent;
  let fixture: ComponentFixture<AgregarnotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarnotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarnotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
