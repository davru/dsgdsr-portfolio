import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';

describe('FeaturedProjectComponent', () => {
  let fixture: ComponentFixture<ProgressBarComponent>;
  let component: ProgressBarComponent;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
