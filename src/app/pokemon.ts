export interface Pokemon {
  hp: string;
  id: number;
  name: string;
  speed: string;
  totalStats: string;
  attack: string;
  type: string[];
  defense: string;
  spAttack: string;
  spDefence: string;
  isLegendary: boolean;
  generationNo: string;
}

export interface PokemonResponse {
  ['#']: string;
  HP: string;
  id: number;
  Name: string;
  Speed: string;
  Total: string;
  Attack: string;
  ['Type 1']: string;
  ['Type 2']: string;
  Defense: string;
  ['Sp. Atk']: string;
  ['Sp. Def']: string;
  Legendary: string;
  Generation: string;
}
