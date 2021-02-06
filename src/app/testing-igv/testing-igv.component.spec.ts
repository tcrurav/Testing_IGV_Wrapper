import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingIgvComponent } from './testing-igv.component';

describe('TestingIgvComponent', () => {
  let component: TestingIgvComponent;
  let fixture: ComponentFixture<TestingIgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingIgvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingIgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
