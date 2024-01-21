import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Center, Text } from "@chakra-ui/react";

interface Game {
  id: string;
  name: string;
  released: string;
  rating: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GamesGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <Center>{error && <Text>{error}</Text>}</Center>

      <Center>
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      </Center>
    </>
  );
};

export default GamesGrid;
