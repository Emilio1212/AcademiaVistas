import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmaestroComponent } from './editarmaestro.component';

describe('EditarmaestroComponent', () => {
  let component: EditarmaestroComponent;
  let fixture: ComponentFixture<EditarmaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarmaestroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarmaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
