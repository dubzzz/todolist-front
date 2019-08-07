import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistNewItemComponent } from './todolist-new-item.component';

describe('TodolistNewItemComponent', () => {
  let component: TodolistNewItemComponent;
  let fixture: ComponentFixture<TodolistNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
