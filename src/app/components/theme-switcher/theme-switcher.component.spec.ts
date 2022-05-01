import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ThemeModes } from '../../services/theme.service';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { ThemeSwitcherModule } from './theme-switcher.module';

describe('FeaturedProjectComponent', () => {
  let fixture: ComponentFixture<ThemeSwitcherComponent>;
  let component: ThemeSwitcherComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcherModule],
      declarations: [],
      schemas: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwitcherComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call setTheme when clicking the icon', () => {
    const spySetTheme = spyOn(component, 'setTheme');
    const expectFn = (themeState: ThemeModes) => expect(spySetTheme)
      .toHaveBeenCalledWith(themeState === ThemeModes.Light ? ThemeModes.Dark : ThemeModes.Light);
    const themeIcon = fixture.debugElement.query(By.css('.theme-icon')).nativeElement;

    themeIcon.click();
    expectFn(component.theme);

    component.theme = ThemeModes.Dark;
    fixture.detectChanges();
    themeIcon.click();
    expectFn(component.theme);
  });

  it('should call service component when clicking', () => {
    const spyService = spyOn(component['themeService'], 'setTheme');

    component.setTheme(ThemeModes.Light);
    expect(spyService).toHaveBeenCalledWith(ThemeModes.Light);
    expect(component.theme).toBe(ThemeModes.Light);

    component.setTheme(ThemeModes.Dark);
    expect(spyService).toHaveBeenCalledWith(ThemeModes.Dark);
    expect(component.theme).toBe(ThemeModes.Dark);
  });
});
