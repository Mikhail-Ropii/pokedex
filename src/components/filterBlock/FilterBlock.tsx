import { useEffect, useState } from "react";
import { getTypesList } from "../../services/api";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

interface FilterBlockProps {
  setFilterValue: (value: string) => void;
  filterValue: string;
}

type typesList = {
  name: string;
};

export const FilterBlock = ({
  setFilterValue,
  filterValue,
}: FilterBlockProps) => {
  const [typesList, setTypesList] = useState<typesList[]>();

  useEffect(() => {
    const getPoke = async () => {
      try {
        const results = await getTypesList();
        setTypesList(results);
      } catch (error) {}
    };
    getPoke();
  }, []);

  return (
    <div style={{ display: "flex", marginBottom: "15px" }}>
      <span style={{ marginRight: "15px" }}>Filter by types:</span>
      <form>
        <select
          name="types"
          onChange={(event) => setFilterValue(event.target.value)}
          value={filterValue}
        >
          <option value="">All types</option>
          {typesList?.map((item) => (
            <option key={item.name} value={item.name}>
              {capitalizeFirstLetter(item.name)}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
