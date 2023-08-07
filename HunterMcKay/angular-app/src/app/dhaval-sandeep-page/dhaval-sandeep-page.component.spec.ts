import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhavalSandeepPageComponent } from './dhaval-sandeep-page.component';

describe('DhavalSandeepPageComponent', () => {
  let component: DhavalSandeepPageComponent;
  let fixture: ComponentFixture<DhavalSandeepPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DhavalSandeepPageComponent]
    });
    fixture = TestBed.createComponent(DhavalSandeepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
