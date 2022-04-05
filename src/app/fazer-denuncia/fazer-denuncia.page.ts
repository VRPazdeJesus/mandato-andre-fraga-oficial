import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fazer-denuncia',
  templateUrl: './fazer-denuncia.page.html',
  styleUrls: ['./fazer-denuncia.page.scss'],
})
export class FazerDenunciaPage implements OnInit {

  tituloDoProjeto: string
  categoriaDoProjeto: string
  resumoDaSolicitacao: string
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
  bairroDoProjeto: string
  entidadeDoProjeto: string
  valorDoProjeto: string
  fotoDenuncia: string

  constructor(private nav: NavController) { 
    this.tituloDoProjeto = ''
    this.categoriaDoProjeto = 'Selecione a categoria'
    this.resumoDaSolicitacao = ''
    this.bairroDoProjeto = ''
    this.entidadeDoProjeto = ''
    this.valorDoProjeto = ''
  }

  ngOnInit() {
  }

  proximo(values:any) {
    this.nav.navigateForward('/'+values)
  }

  sendProposal() {
    this.tituloDoProjeto = ''
    console.log("Enviando proposta")
    this.categoriaDoProjeto = 'Selecione a categoria'
    this.resumoDaSolicitacao = ''
    this.bairroDoProjeto = ''
    this.entidadeDoProjeto = ''
    this.valorDoProjeto = ''
    this.proximo('resposta-de-envio')
  }

}
