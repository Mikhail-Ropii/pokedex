import { useState } from "react";
import { Pokelist } from "../components/pokeList/PokeList";
import { getPokeById } from "../services/api";

import css from "./styles.module.scss";
import { Button } from "../components/button/Button";
import { Container } from "../components/container/Container";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(false);
  const [pokeDetails, setPokeDetails] = useState();

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleShowPokeDetails = async (id: number) => {
    try {
      const results = await getPokeById(id);
      console.log(results);
    } catch (error) {}
  };

  return (
    <Container>
      <div className={css.titleWrap}>
        <h1 className={css.title}>Pokedex</h1>
      </div>
      <Pokelist
        onShowPokeDetails={handleShowPokeDetails}
        onSetIsBtnDisabled={setIsBtnDisabled}
        currentPage={currentPage}
      />
      <Button disabled={isBtnDisabled} onClick={handleLoadMore}>
        Load More
      </Button>
    </Container>
  );
};
