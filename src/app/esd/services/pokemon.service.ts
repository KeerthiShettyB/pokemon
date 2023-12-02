import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonDetail } from '../models/pokemon.detail';
import { PokemonList } from '../models/pokemon.list';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }
  private searchPokemonSubject = new BehaviorSubject(null);
  searchPokemon$ = this.searchPokemonSubject.asObservable();

  setSearchPokemon(pokemon: any) {
    console.log('in service file');
    
    this.searchPokemonSubject.next(pokemon);

    console.log('out service file');

  }


  getPokemonList(offset: number, limit: number = 20) : Observable<PokemonList[]> {
      return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
      .pipe(
          map((x: any) => x.results)
      );
  }

  getPokemonDetail(pokemon: number | string): Observable<any> {
      return this.http.get<PokemonDetail>(`${this.baseUrl}pokemon/${pokemon}`);
  }
}
