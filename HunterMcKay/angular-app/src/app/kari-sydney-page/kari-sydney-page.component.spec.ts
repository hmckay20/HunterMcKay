import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KariSydneyPageComponent } from './kari-sydney-page.component';

describe('KariSydneyPageComponent', () => {
  let component: KariSydneyPageComponent;
  let fixture: ComponentFixture<KariSydneyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KariSydneyPageComponent]
    });
    fixture = TestBed.createComponent(KariSydneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
