import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameScreen } from '../pages/GameScreen';
import { InstructionPage } from '../pages/InstructionPage';
import { NoFound } from '../pages/NoFound';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InstructionPage />}></Route>
        <Route path="/Game" element={<GameScreen />}></Route>

        <Route path="*" element={<NoFound />}></Route>
      </Routes>
    </Router>
  );
};
