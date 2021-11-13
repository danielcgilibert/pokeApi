import React from 'react';
import styled from 'styled-components';

export const CardPokemon = () => {
  const CardPokemon = styled.div`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    width: 250px;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 1px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.3s;
    &:hover {
      background: linear-gradient(45deg, #FE6B8B 100%, #FF8E53 100%);
      padding: 2%;
    }
    img {
      padding-bottom: 5px;
      max-width: 150px;
      filter: brightness(0%);
  `;

  return (
    <CardPokemon>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
        alt="Logo"
      />
    </CardPokemon>
  );
};
