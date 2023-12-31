import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2";

const PAGE_LIMIT = 12;

export const getPokeList = async (currentPage: number) => {
  const { data } = await axios.get(
    `/pokemon/?limit=${PAGE_LIMIT}&offset=${PAGE_LIMIT * currentPage}`
  );
  return data;
};

export const getTypesList = async () => {
  const { data } = await axios.get("/type?limit=999");
  const result = data.results.map(({ name }: any) => {
    return {
      name,
    };
  });
  return result;
};

export const getPokeDetails = async (urls: string[]) => {
  const requests = urls.map((url) => axios.get(url));
  const responses = await axios.all(requests);
  const data = responses.map(({ data }) => {
    return {
      id: data.id,
      name: data.name,
      img: data.sprites.front_default,
      types: data.types,
    };
  });
  return data;
};

export const getPokeById = async (_id: number) => {
  const response = await axios.get(`/pokemon/${_id}`);
  const data = (({ id, name, sprites, types, stats, weight, moves }: any) => ({
    id,
    name,
    img: sprites.front_default,
    types,
    stats,
    weight,
    totalMoves: moves.length,
  }))(response.data);

  return data;
};
