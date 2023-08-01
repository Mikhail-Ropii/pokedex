import { useEffect, useState } from "react";
import css from "./styles.module.scss";

import { getPokeDetails, getPokeList } from "../../services/api";
import { PokeCard } from "../pokeCard/PokeCard";
import { Pokemon } from "../../models/pokemon";
interface PokeListProps {
  currentPage: number;
  onSetIsBtnDisabled: (boolean: boolean) => void;
  onShowPokeDetails: (id: number) => void;
}

export const Pokelist = ({
  currentPage,
  onSetIsBtnDisabled,
  onShowPokeDetails,
}: PokeListProps) => {
  const [pokeList, setPokeList] = useState<Pokemon[]>([]);

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

  console.log(pokeList);

  return (
    <div>
      {pokeList && (
        <ul className={css.pokeCardsWrap}>
          {pokeList.map((item) => (
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
