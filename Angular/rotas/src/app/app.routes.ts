import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { NaoEncontradoComponent } from './paginas/nao-encontrado/nao-encontrado.component';
import { RestritoComponent } from './paginas/restrito/restrito.component';
import { autenticadorGuard } from './autenticador.guard';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path:'sobre', component:SobreComponent},
    {path:'restrito', component:RestritoComponent, canActivate:[autenticadorGuard]},
    {path:'', redirectTo:'/inicio', pathMatch:'full'},
    {path:'**', component:NaoEncontradoComponent}
];