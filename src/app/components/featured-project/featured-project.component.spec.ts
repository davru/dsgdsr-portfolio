import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project } from '../../interfaces/project';
import { FeaturedProjectComponent } from './featured-project.component';
import { FeaturedProjectModule } from './featured-project.module';

const ProjectMock: Project = {
  name: 'test project',
  slug: 'test-project',
  description: 'description',
  tags: [],
  image_url: 'http://image.test.dev/image.png',
  featured_image: 'blob::image.png',
  url: 'http://url.test.dev/',
  links: []
};

describe('FeaturedProjectComponent', () => {
  let fixture: ComponentFixture<FeaturedProjectComponent>;
  let component: FeaturedProjectComponent;
  let componentElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectModule],
      declarations: [],
      schemas: [],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectComponent);
    component = fixture.componentInstance;
    componentElement = fixture.debugElement.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add \'rtl\' class if rtl input is true', () => {
    component.rtl = true;
    fixture.detectChanges();
    const classes = Object.values(componentElement.querySelector('.featured-project').classList);
    expect(classes).toContain('featured-project--rtl');
  });

  describe('Project rendering:', () => {
    beforeEach(() => {
      component.project = ProjectMock;
      fixture.detectChanges();
    });

    it('should render project name properly', () => {
      const title = componentElement.querySelector('.project__title').innerText;
      expect(title).toEqual(ProjectMock.name);
    });

    it('should render project description properly', () => {
      const description = componentElement.querySelector('.project__description').innerText;
      expect(description).toEqual(ProjectMock.description);
    });

    it('should add anchor for project url if exists', () => {
      const anchor = componentElement.querySelector('.project__url');
      expect(anchor).toBeTruthy();
      expect(anchor.href).toEqual(ProjectMock.url);
    });

    it('should not add anchor if url missing', () => {
      component.project.url = null;
      fixture.detectChanges();
      const anchor = componentElement.querySelector('.project__url');
      expect(anchor).toBeFalsy();
      // Reset to avoid tests failing
      component.project.url = 'http://url.test.dev/';
    });

    it('should render featured image (Blob) properly', () => {
      const imageSrcBlob = componentElement.querySelector('.project__image').src;
      expect(imageSrcBlob).toEqual(`unsafe:${ProjectMock.featured_image}`);
    });

    xit('should render project image url if featured_image is missing', () => {
      component.project.featured_image = null;
      fixture.detectChanges();
      const imageSrc = componentElement.querySelector('.project__image').src;
      expect(imageSrc).toEqual(ProjectMock.image_url);
      // Reset to avoid tests failing
      component.project.featured_image = 'blob::image.png';
    });
  });
});
