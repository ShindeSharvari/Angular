import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharyuComponent } from './sharyu.component';

describe('SharyuComponent', () => {
  let component: SharyuComponent;
  let fixture: ComponentFixture<SharyuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharyuComponent]
    });
    fixture = TestBed.createComponent(SharyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
