import { PokemonEndpointService } from './pokemon-endpoint.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-pokedex';
  pokemonList$ = this.pokemonService.fetchPokemonList();

  constructor(private pokemonService: PokemonEndpointService) {}
  ngOnInit(): void {
  }
}
