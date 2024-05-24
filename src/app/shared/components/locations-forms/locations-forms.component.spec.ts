import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsFormsComponent } from './locations-forms.component';

describe('LocationsFormsComponent', () => {
  let component: LocationsFormsComponent;
  let fixture: ComponentFixture<LocationsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
