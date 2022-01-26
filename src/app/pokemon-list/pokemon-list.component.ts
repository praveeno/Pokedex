import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @ViewChild('search', {read: ElementRef, static: true}) input: ElementRef;

  @Input() pokemonList;
  actualList;
  onlyLegendaryPokemon = false;
  searchControl: FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actualList = this.pokemonList;
    this.searchControl = this.fb.control('');
  }

  ngOnChanges() {
    this.actualList = this.pokemonList;
  }

  ngAfterViewInit() {
    this.registerSearch()
  }

  pokemonTrackBy(i, elem) {
    return elem.id;
  }

  showLegendaryPokemon() {
    this.actualList = this.pokemonList.filter(p => p.isLegendary);
  }

  showAllPokemon() {
    this.actualList = this.pokemonList;
  }

  toggleLegendaryPokemon() {
    this.onlyLegendaryPokemon = !this.onlyLegendaryPokemon;

    if (this.onlyLegendaryPokemon) this.showLegendaryPokemon();
    else this.showAllPokemon();
  }

  filterPokemon(text) {
    this.actualList = this.pokemonList.filter(p => p.name.toLowerCase().includes(text.toLowerCase()));
  }
  registerSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((text) => this.filterPokemon(text))
    )
    .subscribe();
  }
}
