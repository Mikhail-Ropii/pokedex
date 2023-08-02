export interface Pokemon {
  id: number;
  name: string;
  img: string;
  types: Types[];
}

type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

export interface PokemonDetails extends Pokemon {
  stats: Stats[];
  weight: number;
  totalMoves: number;
}
