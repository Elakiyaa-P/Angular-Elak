import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpverbsComponent } from './httpverbs.component';

describe('HttpverbsComponent', () => {
  let component: HttpverbsComponent;
  let fixture: ComponentFixture<HttpverbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpverbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpverbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
