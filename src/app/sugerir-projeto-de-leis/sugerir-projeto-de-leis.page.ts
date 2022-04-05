import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sugerir-projeto-de-leis',
  templateUrl: './sugerir-projeto-de-leis.page.html',
  styleUrls: ['./sugerir-projeto-de-leis.page.scss'],
})
export class SugerirProjetoDeLeisPage implements OnInit {

  tituloDaLei: string
  categoriaDaLei: string
  resumoDaSolicitacao: string
  fileName: string

  categories = [
    'Acessibilidade e Cidadania',
    'Administração e Gestão de Pessoa',
    'Assistencia ao Animal',
    'Comunicação',
    'Cultura',
    'Datas Comemorativas',
    'Denominação de Logadouro',
    'Desenvolvimento Econômico e Social',
    'Direitos da Mulher',
    'Direito e Proteção Idoso',
    'Direitos Humanos e Justiça',
    'Educação',
    'Esporte e Lazer',
    'Finanças e Orçamento',
    'Frente Parlamentar',
    'Honraria',
    'Meio Ambiente',
    'Planejamento Urbano',
    'Previdência Social',
    'Reparação',
    'Saúde',
    'Segurança / Combate a Violência',
    'Serviço Público',
    'Trasnporte e Trânsito',
    'Turismo e Desporto',
    'Utilidade Pública',
    'Outros'
  ]

  fileToUpload: File = null;

  constructor(private nav: NavController) {
    this.tituloDaLei = ''
    this.categoriaDaLei = 'Selecione a categoria'
    this.resumoDaSolicitacao = ''
    this.fileName = ''
  }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log('this.fileToUpload', this.fileToUpload)
  }

  sendProposal() {
    console.log("Enviando proposta")
    this.tituloDaLei = ''
    this.categoriaDaLei = 'Selecione a categoria'
    this.resumoDaSolicitacao = ''
    this.fileName = ''
    this.proximo('resposta-de-envio')
  }

}
