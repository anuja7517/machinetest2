import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdenttableComponent } from './stdenttable.component';

describe('StdenttableComponent', () => {
  let component: StdenttableComponent;
  let fixture: ComponentFixture<StdenttableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdenttableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdenttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
