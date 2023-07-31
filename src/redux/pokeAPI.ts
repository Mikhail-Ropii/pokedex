import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const limit = 12;

export const pokeAPI = createApi({
  reducerPath: "pokeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: ["poke"],

  endpoints: (builder) => ({
    getPokeList: builder.query({
      query: (offset = 0) => ({
        url: `pokemon/?limit=${limit}&offset=${offset}`,
        method: "GET",
      }),
      providesTags: ["poke"],
    }),

    getAllHeroes: builder.query({
      query: (page) => ({
        url: `api/heroes/all/${page}`,
        method: "GET",
      }),
      providesTags: ["poke"],
    }),
  }),
});

export const {useGetPokeListQuery} = pokeAPI;
