import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInPageComponent } from './sign-in-page.component';

describe('SignInComponent', () => {
  let component: SingInPageComponent;
  let fixture: ComponentFixture<SingInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
