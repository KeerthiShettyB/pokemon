import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from '../../esd/models/pokemon.detail';
import { PokemonService } from '../../esd/services/pokemon.service';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})

export class PokemonDetailComponent {
  pokemonsDetail: PokemonDetail | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (id) {
            return this.pokemonService.getPokemonDetail(id);
          } else {
            return of(null); 
          }
        }),
        catchError((error) => {
          console.error(error);
          return of(null); 
        })
      )
      .subscribe((result) => {
        if (result) {
          this.pokemonsDetail = {
            id: result.id,
            order: result.order,
            name: result.name,
            height: result.height,
            abilities: result.abilities,
            species: result.species,
            types: result.types,
            weight: result.weight,
            sprites: result.sprites,
            stats: result.stats,
          };
        }
      });
  }
}
