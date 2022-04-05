import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespostaDeEnvioPage } from './resposta-de-envio.page';

describe('RespostaDeEnvioPage', () => {
  let component: RespostaDeEnvioPage;
  let fixture: ComponentFixture<RespostaDeEnvioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RespostaDeEnvioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespostaDeEnvioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
