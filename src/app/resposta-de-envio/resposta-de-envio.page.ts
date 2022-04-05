import { Component, OnInit } from '@angular/core';
import { NavController } from  '@ionic/angular'

@Component({
  selector: 'app-resposta-de-envio',
  templateUrl: './resposta-de-envio.page.html',
  styleUrls: ['./resposta-de-envio.page.scss'],
})
export class RespostaDeEnvioPage implements OnInit {

  dataResponse = {
    titlePage: 'SUGERIR PROJETO DE LEI',
    titleContent: 'Sua sugestão de Projeto foi enviada.',
    descriptionContent: 'Em breve a equipe retornará o contato pelo whatsapp. Obrigado por fazer parte dessa rede!',
    sucessResponse: true,
    pageURL: 'sugerir-projeto-de-leis'
  }

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

}
