import { useState } from "react";
import { getPokeById } from "../services/api";
import css from "./styles.module.scss";
import { Button } from "../components/button/Button";
import { Container } from "../components/container/Container";
import { Pokelist } from "../components/pokeList/PokeList";
import { PokeDetails } from "../components/pokeDetails/PokeDetails";
import { PokemonDetails } from "../models/pokemon";
import { FilterBlock } from "../components/filterBlock/FilterBlock";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);
  const [pokeDetails, setPokeDetails] = useState<PokemonDetails | null>(null);
  const [filterValue, setFilterValue] = useState<string>("");

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleShowPokeDetails = async (id: number) => {
    try {
      const results = await getPokeById(id);
      setPokeDetails(results);
    } catch (error) {}
  };

  return (
    <Container>
      <div className={css.titleWrap}>
        <h1 className={css.title}>Pokedex</h1>
      </div>
      <FilterBlock filterValue={filterValue} setFilterValue={setFilterValue} />
      <div className={css.mainContentWrap}>
        <div>
          <Pokelist
            onShowPokeDetails={handleShowPokeDetails}
            onSetIsBtnDisabled={setIsBtnDisabled}
            currentPage={currentPage}
            filterValue={filterValue}
          />
          <Button disabled={isBtnDisabled} onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
        <div className={css.pokeDetailsWrap}>
          {pokeDetails && <PokeDetails poke={pokeDetails} />}
        </div>
      </div>
    </Container>
  );
};
