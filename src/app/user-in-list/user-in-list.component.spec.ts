import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInListComponent } from './user-in-list.component';

describe('UserInListComponent', () => {
  let component: UserInListComponent;
  let fixture: ComponentFixture<UserInListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
