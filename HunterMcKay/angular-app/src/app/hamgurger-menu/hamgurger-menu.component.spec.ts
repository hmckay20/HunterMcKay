import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamgurgerMenuComponent } from './hamgurger-menu.component';

describe('HamgurgerMenuComponent', () => {
  let component: HamgurgerMenuComponent;
  let fixture: ComponentFixture<HamgurgerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamgurgerMenuComponent]
    });
    fixture = TestBed.createComponent(HamgurgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
