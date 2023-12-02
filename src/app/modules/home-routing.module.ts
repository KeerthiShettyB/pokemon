import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'pokemon_info', 
        pathMatch: 'full'
       
      },
      {
        path: 'pokemon_info',
        component: PokemonInfoComponent
      },
      {
        path: 'pokemon_detail/:id',
        component: PokemonDetailComponent
      },
      {
        path: '**',
        redirectTo: 'pokemon_info', 
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
