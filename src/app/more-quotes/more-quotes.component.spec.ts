import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreQuotesComponent } from './more-quotes.component';

describe('MoreQuotesComponent', () => {
  let component: MoreQuotesComponent;
  let fixture: ComponentFixture<MoreQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
