import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAffectComponent } from './task-affect.component';

describe('TaskAffectComponent', () => {
  let component: TaskAffectComponent;
  let fixture: ComponentFixture<TaskAffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
