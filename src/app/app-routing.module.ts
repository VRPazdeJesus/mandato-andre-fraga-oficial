import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'post',
    loadChildren: () => import('./modal/post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'recupera-senha',
    loadChildren: () => import('./recupera-senha/recupera-senha.module').then( m => m.RecuperaSenhaPageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'blog-projetos-com-sociedade-civil',
    loadChildren: () => import('./blog-projetos-com-sociedade-civil/blog-projetos-com-sociedade-civil.module').then( m => m.BlogProjetosComSociedadeCivilPageModule)
  },
  {
    path: 'colabore',
    loadChildren: () => import('./colabore/colabore.module').then( m => m.ColaborePageModule)
  },
  {
    path: 'colabore-dashboard',
    loadChildren: () => import('./colabore-dashboard/colabore-dashboard.module').then( m => m.ColaboreDashboardPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'nosso-mandato',
    loadChildren: () => import('./nosso-mandato/nosso-mandato.module').then( m => m.NossoMandatoPageModule)
  },
  {
    path: 'fazer-denuncia',
    loadChildren: () => import('./fazer-denuncia/fazer-denuncia.module').then( m => m.FazerDenunciaPageModule)
  },
  {
    path: 'sugerir-projeto-de-leis',
    loadChildren: () => import('./sugerir-projeto-de-leis/sugerir-projeto-de-leis.module').then( m => m.SugerirProjetoDeLeisPageModule)
  },
  {
    path: 'projeto-de-lei',
    loadChildren: () => import('./projeto-de-lei/projeto-de-lei.module').then( m => m.ProjetoDeLeiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
