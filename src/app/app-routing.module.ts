import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduacoesComponent } from './components/graduacoes/graduacoes.component';
import { VipComponent } from './components/vip/vip.component';

const routes: Routes = [
  // { path: '', redirectTo: '/graduacoes', pathMatch: 'full' },
  { path: '', component: GraduacoesComponent },
  { path: 'vip', component: VipComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
