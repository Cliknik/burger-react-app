import React, {StrictMode} from 'react';
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import data from '../../utils/data'


function App() {
  return (
      <StrictMode>
        <div className={appStyles.App}>
          <AppHeader />
            <main className={appStyles.burgerContainer}>
              <BurgerIngredients items={data}/>
              <BurgerConstructor items={data}/>
            </main>
        </div>
      </StrictMode>
  );
}

export default App;
