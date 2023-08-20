import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalindroneComponent } from './palindrone.component';

describe('PalindroneComponent', () => {
  let component: PalindroneComponent;
  let fixture: ComponentFixture<PalindroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PalindroneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PalindroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
