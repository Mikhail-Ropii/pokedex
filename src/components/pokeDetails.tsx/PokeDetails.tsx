import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

interface PokeDetailsProps {
    poke:
}

export const PokeDetails = ({ poke }) => {
  return (
    <div className="pokemon-info">
      <img alt="pokemon-img" className="pokemonInfo-img" src={poke.imageUrl} />
      <h3>
        {poke.name}
        {"#"}
        {poke.id}
      </h3>
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
            <td>{poke.base_stat[1]}</td>
            <td>Defense</td>
            <td>{poke.base_stat[2]}</td>
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
