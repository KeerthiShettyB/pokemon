import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonDetail } from '../../esd/models/pokemon.detail';
import { PokemonService } from '../../esd/services/pokemon.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ FormsModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    CommonModule,
    SharedModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchControl: FormControl = new FormControl('');
  searchPokemon: PokemonDetail = new PokemonDetail();
 
  pokemons: PokemonDetail[] = [];
  isLastPage = false;
  
  
  constructor(private pokemonService: PokemonService){ }

    filteredOptions: string[] = [];
  
  private searchTerms = new Subject<string>();


  onSearchPokemon(): void {
    const value = this.searchControl.value;
    console.log(value);
    
    if (value) {
      this.searchControl.valueChanges
    .pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((term: string) => {
        console.log(term, 'teerm');
        
       return this.pokemonService.getPokemonDetail(term)
      })
    )
    .subscribe({
      next: (pokemon: PokemonDetail) => {
        this.searchPokemon = pokemon;
        this.pokemonService.setSearchPokemon(this.searchPokemon);
      },
      error: (error: any) => {
        if (error.status === 404) {
          this.pokemonService.setSearchPokemon('')
        }
      },
    });
      
    }
  }

}
