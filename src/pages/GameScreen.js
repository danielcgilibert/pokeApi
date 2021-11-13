import React, { useEffect, useState } from 'react';
import { loadPokemons } from '../api/loadPokemons';
import { CardPokemon } from '../components/CardPokemon/CardPokemon';
import styled from 'styled-components';

export const GameScreen = () => {
  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    loadPokemons();
  }, []);
  const GameScreen = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  `;
  return (
    <GameScreen>
      <CardPokemon />
      <CardPokemon />

      <CardPokemon />
    </GameScreen>
  );
};
