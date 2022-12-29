import React from 'react';
import appStyles from './App.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import data from '../../utils/data'


function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader />
        <main className={appStyles.burgerContainer}>
          <BurgerIngredients items={data}/>
          <BurgerConstructor />
        </main>
    </div>
  );
}

export default App;
