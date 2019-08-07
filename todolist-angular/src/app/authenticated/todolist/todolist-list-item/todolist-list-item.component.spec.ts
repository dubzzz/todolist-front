import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistListItemComponent } from './todolist-list-item.component';

describe('TodolistListItemComponent', () => {
  let component: TodolistListItemComponent;
  let fixture: ComponentFixture<TodolistListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
