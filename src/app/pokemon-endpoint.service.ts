import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { map, shareReplay } from 'rxjs/operators';
import { Pokemon, PokemonResponse } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonEndpointService {

  constructor(private http: HttpClient) { }

  public fetchPokemonList() {
    return this.http.get<PokemonResponse[]>(environment.pokemonApi)
    .pipe(
      map(pokemonList => pokemonList.map(this.transformPokemon)),
      shareReplay(1))
  }

  transformPokemon(pokemon): Pokemon {
    console.log(pokemon.Legendary);
    return {
      "hp": pokemon.HP,
      "id": pokemon.id,
      "name": pokemon.Name,
      "speed": pokemon.Speed,
      "totalStats": pokemon.Total,
      "attack": pokemon.Attack,
      "type": [pokemon['Type 1'], pokemon['Type 2']],
      "defense": pokemon.Defense,
      "spAttack": pokemon['Sp. Atk'],
      "spDefence": pokemon['Sp. Def'],
      "isLegendary": pokemon.Legendary === 'True',
      "generationNo": pokemon.Generation
    }
  }
}
