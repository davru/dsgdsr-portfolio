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

  it('should calculate the percent depending on page position', () => {
    const scrolled = component['getScrollPercent']();
    expect(scrolled).toBe(0);
  });

  it('should call getScrollPercent when scroll happens', () => {
    const getScrollPercentSpy = spyOn(component as any, 'getScrollPercent');
    component['onScroll']();
    expect(getScrollPercentSpy).toHaveBeenCalled();
  });

  it('should update scrollbar scrollAmount html property', () => {
    component['onScroll']();
    const amount = component['document'].getElementById('progress-bar').style.getPropertyValue('--scrollAmount');
    expect(amount).toBe('0%');
  });
});
