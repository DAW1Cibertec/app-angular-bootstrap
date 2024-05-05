import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormSumaComponent } from './form-suma/form-suma.component';
import { FormImcComponent } from './form-imc/form-imc.component';
import { FormListaComponent } from './form-lista/form-lista.component';
import { FormPipesComponent } from './form-pipes/form-pipes.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'suma', component: FormSumaComponent},
    {path: 'imc', component: FormImcComponent},
    {path: 'lista', component: FormListaComponent},
    {path: 'pipes', component: FormPipesComponent}    
];
