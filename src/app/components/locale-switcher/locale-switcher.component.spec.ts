import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocaleSwitcherComponent } from './locale-switcher.component';
import { TranslateModule } from '@ngx-translate/core';

describe('LocaleSwitcherComponent', () => {
  let fixture: ComponentFixture<LocaleSwitcherComponent>;
  let component: LocaleSwitcherComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LocaleSwitcherComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call setLocale method in translate service if locale is changed', () => {
    const spySetLocale = spyOn(component['translateService'] as any, 'setLocale');
    component.currentLocale = 'en';
    component.onChange('es');
    expect(spySetLocale).toHaveBeenCalledWith('es');
    expect(component.currentLocale).toBe('es');
  });

  it('should not call setLocale method if locale is the same as current selected', () => {
    const spySetLocale = spyOn(component['translateService'] as any, 'setLocale');
    component.currentLocale = 'en';
    component.isOpen = true;
    component.onChange('en');
    expect(spySetLocale).not.toHaveBeenCalled();
    expect(component.isOpen).toBe(false);
    expect(component.currentLocale).toBe('en');
  });

  it('should change isOpen boolean on toggle call', () => {
    component.isOpen = false;
    component.toggle();
    expect(component.isOpen).toBe(true);

    component.isOpen = true;
    component.toggle();
    expect(component.isOpen).toBe(false);
  });
});
