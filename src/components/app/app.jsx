import React, {StrictMode, useEffect} from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import appStyles from './app.module.css'

import AppHeader from "../app-header/app-header";

import {MainPage} from "../../pages/main-page";
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
                {/*<Router>*/}
                {/*    <Routes>*/}
                {/*        <Route path="/" element={<MainPage />} />*/}
                {/*    </Routes>*/}
                {/*</Router>*/}
                {/*<DndProvider backend={HTML5Backend}>*/}
                {/*    <>*/}
                {/*        {*/}
                {/*        itemsSuccess &&*/}
                {/*        <BurgerIngredients/>*/}
                {/*        }*/}
                {/*        <BurgerConstructor />*/}
                {/*    </>*/}
                {/*</DndProvider>*/}
            </main>
        </div>
      </StrictMode>
  );
}

export const MemoizedApp = React.memo(App) ;
