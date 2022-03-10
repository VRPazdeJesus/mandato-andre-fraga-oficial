import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugerirProjetoDeLeisPage } from './sugerir-projeto-de-leis.page';

describe('SugerirProjetoDeLeisPage', () => {
  let component: SugerirProjetoDeLeisPage;
  let fixture: ComponentFixture<SugerirProjetoDeLeisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SugerirProjetoDeLeisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugerirProjetoDeLeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
