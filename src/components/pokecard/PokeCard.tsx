import { Pokemon } from "../../models/pokemon";
import css from "./styles.module.scss";
import { typesColors } from "../../utils/typesColors";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

interface PokeCardProps {
  poke: Pokemon;
}

export const PokeCard = ({ poke }: PokeCardProps) => {
  const { name, img, types } = poke;
  return (
    <div className={css.cardThumb}>
      <div className={css.imgThumb}>
        <img src={img} alt={name} className={css.img} />
      </div>
      <p className={css.pokeName}>{capitalizeFirstLetter(name)}</p>
      <ul className={css.typesWrap}>
        {types.map((item) => (
          <li
            className={css.typesItem}
            style={{ backgroundColor: typesColors[item.type.name] }}
            key={item.slot}
          >
            {capitalizeFirstLetter(item.type.name)}
          </li>
        ))}
      </ul>
    </div>
  );
};
