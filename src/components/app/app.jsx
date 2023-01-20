import React, {StrictMode, useState, useEffect} from 'react';
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalLayout from "../modal-layout/modal-layout";
import {url} from '../../utils/constants'
import {getDataFromServer} from "../../utils/get-data-from-server";

function App() {
    const [ingredients, setIngredients] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [ingredientId, setIngredientId] = useState(null);

    const getProductData = () => {
        getDataFromServer(url)
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
          <AppHeader />
            <main className={appStyles.burgerContainer}>{
                ingredients &&
                <>
                    <BurgerIngredients getClickedIngredientId={getClickedIngredientId} getModalType={getModalType} items={ingredients} openModal={openModal} modalOpened={modalOpened}/>
                    <BurgerConstructor getModalType={getModalType} items={ingredients} openModal={openModal} modalOpened={modalOpened}/>
                </>
            }
            </main>{
            ingredients &&
            <ModalLayout ingredientId={ingredientId} ingredients={ingredients} modalContent={modalContent} modalOpened={modalOpened} openModal={openModal} closeModal={closeModal}/>
        }
        </div>
      </StrictMode>
  );
}

export default App;
