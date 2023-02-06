import React, {StrictMode, useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {url} from '../../utils/constants';
import {getIngredientsData} from "../../services/actions/ingredientsData";

function App() {
    const dispatch = useDispatch();

    const itemsSuccess = useSelector(state => state.ingredients);

    useEffect(() => {
        dispatch(getIngredientsData(`${url}ingredients`))
    }, [dispatch])

    return (
      <StrictMode>
        <div className={appStyles.App}>
          <AppHeader />
            <main className={appStyles.burgerContainer}>
                <>{
                    itemsSuccess &&
                    <BurgerIngredients/>
                }
                    {/*<BurgerConstructor setOrderNumber={setOrderNumber} getModalType={getModalType} openModal={openModal} modalOpened={modalOpened}/>*/}
                </>
            </main>
        </div>
      </StrictMode>
  );
}

export default App;
