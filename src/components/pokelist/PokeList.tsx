import { useEffect, useState } from "react";
import css from "./styles.module.scss";

import { getPokeDetails, getPokeList } from "../../services/api";
import { PokeCard } from "../pokeCard/PokeCard";
import { Pokemon } from "../../models/pokemon";
interface PokeListProps {
  currentPage: number;
  onSetIsBtnDisabled: (boolean: boolean) => void;
  onShowPokeDetails: (id: number) => void;
  filterValue: string;
}

export const Pokelist = ({
  currentPage,
  onSetIsBtnDisabled,
  onShowPokeDetails,
  filterValue,
}: PokeListProps) => {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);

  const filteredPoke = pokeList.filter((item) => {
    if (filterValue) {
      return item.types.some((item) => item.type.name.includes(filterValue));
    }
    return pokeList;
  });

  useEffect(() => {
    const getPoke = async () => {
      try {
        onSetIsBtnDisabled(true);
        const results = await getPokeList(currentPage);
        const pokemonsURL = results.results.map(
          ({ url }: { url: string }) => url
        );
        const pokeResults = await getPokeDetails(pokemonsURL);
        setPokeList((prevList) => [...prevList, ...pokeResults]);
      } catch (error) {
      } finally {
        onSetIsBtnDisabled(false);
      }
    };
    getPoke();
  }, [currentPage, onSetIsBtnDisabled]);

  return (
    <div>
      {pokeList && (
        <ul className={css.pokeCardsWrap}>
          {filteredPoke.map((item) => (
            <li
              key={item.id}
              onClick={() => onShowPokeDetails(item.id)}
              className={css.pokeCardItem}
            >
              <PokeCard poke={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
