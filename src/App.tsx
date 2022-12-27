import React from 'react';
import appStyles from './App.module.css'
import AppHeader from "./components/AppHeader/AppHeader.";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";


function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader />
        <div className={appStyles.burgerContainer}>
          <BurgerIngredients />
        </div>
    </div>
  );
}

export default App;
