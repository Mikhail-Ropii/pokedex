import { PokemonDetails } from "../../models/pokemon";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import css from "./styles.module.scss";

interface PokeDetailsProps {
  poke: PokemonDetails;
}

export const PokeDetails = ({ poke }: PokeDetailsProps) => {
  const findStatValue = (statName: string) =>
    poke.stats.find((item) => item.stat.name === statName)?.base_stat;

  return (
    <div className={css.pokeDetailsCard}>
      <div className={css.imgThumb}>
        <img alt="pokemon" className={css.img} src={poke.img} />
      </div>
      <p className={css.name}>
        {capitalizeFirstLetter(poke.name)}
        {" #"}
        {poke.id}
      </p>
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>
              {poke.types
                .map(({ type }) => capitalizeFirstLetter(type.name))
                .join(" ")}
            </td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{findStatValue("attack")}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{findStatValue("defense")}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{findStatValue("hp")}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{findStatValue("special-attack")}</td>
          </tr>
          <tr>
            <td>SP Defense</td>
            <td>{findStatValue("special-defense")}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{findStatValue("speed")}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{poke.weight}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{poke.totalMoves}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
