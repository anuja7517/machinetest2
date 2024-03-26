import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdentformComponent } from './stdentform.component';

describe('StdentformComponent', () => {
  let component: StdentformComponent;
  let fixture: ComponentFixture<StdentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdentformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
