import React, {StrictMode, useState, useEffect} from 'react';
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalLayout from "../modal-layout/modal-layout";


const url = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
    const [ingredients, setIngredients] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [ingredientId, setIngredientId] = useState(null);

    const getProductData = () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
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

    function toggleModalHandler(evt) {
        setModalOpened(!modalOpened);
        if (evt.currentTarget.className.includes('ingredient')) {
            setModalContent('ingredient');
            setIngredientId(evt.currentTarget.id)
        }
        else {
            setModalContent('order')
        }
    }

    function escButtonHandler(event){
        if (event.key === 'Escape') {
            closeModal();
        }
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
            </main>
            <ModalLayout ingredientId={ingredientId} ingredients={ingredients} modalContent={modalContent} modalOpened={modalOpened} openModal={openModal} closeModal={closeModal} escButtonHandler={escButtonHandler}/>
        </div>
      </StrictMode>
  );
}

export default App;
