export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: {
    fast: PokemonAttackInterface[];
    special: PokemonAttackInterface[];
  };
  evolutions?: Pokemon[];
}

export interface PokemonAttackInterface {
  name: string;
  type: string;
  damage: string;
}
