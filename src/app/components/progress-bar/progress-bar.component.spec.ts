import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarComponent } from './progress-bar.module';

describe('FeaturedProjectComponent', () => {
  let fixture: ComponentFixture<ProgressBarComponent>;
  let component: ProgressBarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent, RouterTestingModule],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
