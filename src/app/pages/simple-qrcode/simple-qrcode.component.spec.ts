import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQrcodeComponent } from './simple-qrcode.component';

describe('SimpleQrcodeComponent', () => {
  let component: SimpleQrcodeComponent;
  let fixture: ComponentFixture<SimpleQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleQrcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
