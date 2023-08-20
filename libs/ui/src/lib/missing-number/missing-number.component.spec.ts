import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissingNumberComponent } from './missing-number.component';

describe('MissingNumberComponent', () => {
  let component: MissingNumberComponent;
  let fixture: ComponentFixture<MissingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissingNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MissingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
