import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';

describe('NavComponentt', () => {
  let fixture: ComponentFixture<NavComponent>;
  let component: NavComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavComponent,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('navigateToWork()', () => {
    it('should scroll by 95 if route is base path', () => {
      const spyWindowScroll = spyOn<any>(window, 'scrollTo');

      component.navigateToWork();

      const topOffset = Math.round(window.innerHeight / (100 / 95));
      expect(spyWindowScroll).toHaveBeenCalledOnceWith({
        left: document.body.scrollWidth,
        top: topOffset,
        behavior: 'smooth'
      });
    });

    it('should redirect to homepage if not in base path', () => {
      const spyNavigate = spyOn(component['router'], 'navigate');
      spyOnProperty(component['router'], 'url', 'get').and.returnValue('/blog');

      component.navigateToWork();

      expect(spyNavigate).toHaveBeenCalledOnceWith(['/']);
    });
  });
});
