import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuFunding } from './eu-funding';

describe('EuFunding', () => {
  let component: EuFunding;
  let fixture: ComponentFixture<EuFunding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuFunding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuFunding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
