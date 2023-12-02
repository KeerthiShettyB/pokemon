import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { CardDetailsComponent } from '../components/card-details/card-details.component';
import { PokemonService } from '../esd/services/pokemon.service';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonInfoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    SearchBarComponent,
    CardDetailsComponent
  ],
  providers:[PokemonService]
})
export class HomeModule { }
