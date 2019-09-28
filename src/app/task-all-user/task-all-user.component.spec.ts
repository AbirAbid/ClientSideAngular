import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAllUserComponent } from './task-all-user.component';

describe('TaskAllUserComponent', () => {
  let component: TaskAllUserComponent;
  let fixture: ComponentFixture<TaskAllUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAllUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
