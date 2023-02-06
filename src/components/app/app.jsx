import React, {StrictMode, useState, useEffect, useContext} from 'react';
import {useDispatch, useSelector} from "react-redux";
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalLayout from "../modal-layout/modal-layout";
import {url} from '../../utils/constants';
import {getDataFromServer} from "../../utils/work-with-api";
import {IngredientsContext} from '../../services/ingredientsContext'
import {getIngredientsData} from "../../services/actions/ingredientsData";

function App() {
    const dispatch = useDispatch();

    const itemsSuccess = useSelector(state => state.ingredients);

    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [ingredientId, setIngredientId] = useState(null);
    const [orderNumber, setOrderNumber] = useState(0);

    useEffect(() => {
        dispatch(getIngredientsData(`${url}ingredients`))
    }, [dispatch])

    function openModal(){
        setModalOpened(true);
    }

    function closeModal(){
        setModalOpened(false);
        setOrderNumber(null);
    }

    function getModalType(evt){
        if (evt.currentTarget.className.includes('ingredient')) {
            setModalContent('ingredient');
        }
        else {
            setModalContent('order');
        }
    }

    function getClickedIngredientId(evt) {
        setIngredientId(evt.currentTarget.id)
    }

    return (
      <StrictMode>
        <div className={appStyles.App}>
          <AppHeader />
                <main className={appStyles.burgerContainer}>
                    <>{
                        itemsSuccess &&
                        <BurgerIngredients getClickedIngredientId={getClickedIngredientId} getModalType={getModalType} openModal={openModal} modalOpened={modalOpened}/>
                    }
                        {/*<BurgerConstructor setOrderNumber={setOrderNumber} getModalType={getModalType} items={ingredients} openModal={openModal} modalOpened={modalOpened}/>*/}
                    </>
                </main>
                {/*<ModalLayout orderNumber={orderNumber} ingredientId={ingredientId} ingredients={ingredients} modalContent={modalContent} modalOpened={modalOpened} openModal={openModal} closeModal={closeModal}/>*/}
        </div>
      </StrictMode>
  );
}

export default App;
