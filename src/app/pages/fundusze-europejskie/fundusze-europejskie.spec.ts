import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunduszeEuropejskie } from './fundusze-europejskie';

describe('FunduszeEuropejskie', () => {
  let component: FunduszeEuropejskie;
  let fixture: ComponentFixture<FunduszeEuropejskie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunduszeEuropejskie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunduszeEuropejskie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
