import React, {StrictMode, useState, useEffect, useContext} from 'react';
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalLayout from "../modal-layout/modal-layout";
import {url} from '../../utils/constants';
import {getDataFromServer} from "../../utils/work-with-api";
import {IngredientsContext} from '../../services/ingredientsContext'

function App() {
    const [ingredients, setIngredients] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [ingredientId, setIngredientId] = useState(null);
    const [orderNumber, setOrderNumber] = useState(0);

    const getProductData = () => {
        getDataFromServer(`${url}ingredients`)
            .then(dataIng => {
                setIngredients(dataIng.data);
            })
            .catch(e => console.log(`Что-то пошло не так. ${e}`))
    }

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

    useEffect(() => {
        getProductData();
    }, [])

    return (
      <StrictMode>
        <div className={appStyles.App}>
          <AppHeader />{
            ingredients &&
            <IngredientsContext.Provider value={{ingredients}}>
                <main className={appStyles.burgerContainer}>
                    <>
                        <BurgerIngredients getClickedIngredientId={getClickedIngredientId} getModalType={getModalType} openModal={openModal} modalOpened={modalOpened}/>
                        <BurgerConstructor setOrderNumber={setOrderNumber} getModalType={getModalType} items={ingredients} openModal={openModal} modalOpened={modalOpened}/>
                    </>
                </main>
                <ModalLayout orderNumber={orderNumber} ingredientId={ingredientId} ingredients={ingredients} modalContent={modalContent} modalOpened={modalOpened} openModal={openModal} closeModal={closeModal}/>
            </IngredientsContext.Provider>
        }
        </div>
      </StrictMode>
  );
}

export default App;
