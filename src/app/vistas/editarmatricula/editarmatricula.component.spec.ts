import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmatriculaComponent } from './editarmatricula.component';

describe('EditarmatriculaComponent', () => {
  let component: EditarmatriculaComponent;
  let fixture: ComponentFixture<EditarmatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarmatriculaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarmatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
