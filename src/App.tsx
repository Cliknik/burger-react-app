import React from 'react';
import appStyles from './App.module.css'
import AppHeader from "./components/app-header/app-header";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";


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
