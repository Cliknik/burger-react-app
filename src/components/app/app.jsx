import React, {StrictMode, useEffect} from 'react';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
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
                <DndProvider backend={HTML5Backend}>
                    <>
                        {
                        itemsSuccess &&
                        <BurgerIngredients/>
                        }
                        <BurgerConstructor />
                    </>
                </DndProvider>
            </main>
        </div>
      </StrictMode>
  );
}

export const MemoizedApp = React.memo(App) ;
