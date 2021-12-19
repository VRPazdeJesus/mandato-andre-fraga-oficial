import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlogProjetosComSociedadeCivilPage } from './blog-projetos-com-sociedade-civil.page';

describe('BlogProjetosComSociedadeCivilPage', () => {
  let component: BlogProjetosComSociedadeCivilPage;
  let fixture: ComponentFixture<BlogProjetosComSociedadeCivilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogProjetosComSociedadeCivilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogProjetosComSociedadeCivilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
