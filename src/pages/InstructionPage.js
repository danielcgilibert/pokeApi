import React from 'react';
import { Link } from 'react-router-dom';

export const InstructionPage = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <Link to="/Game">My Profile</Link>
    </div>
  );
};
