import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendasFormsComponent } from './agendas-forms.component';

describe('AgendasFormsComponent', () => {
  let component: AgendasFormsComponent;
  let fixture: ComponentFixture<AgendasFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendasFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendasFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
