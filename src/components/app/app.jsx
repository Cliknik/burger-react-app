import React, {StrictMode, useState, useEffect} from 'react';
import appStyles from './app.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ModalLayout from "../modal-layout/modal-layout";


const url = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
    const [ingredients, setIngredients] = useState();
    const [modalOpened, setModalOpened] =useState(true);

    function toggleModalHandler() {
        setModalOpened(!modalOpened);
    }

    function escButtonHandler(event){
        if (event.key === 'Escape') {
            setModalOpened(false)
        }
    }

    useEffect(() => {
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

        getProductData();
    }, [])

    return (
      <StrictMode>
        <div className={appStyles.App}>
          <AppHeader />
            <main className={appStyles.burgerContainer}>{
                ingredients &&
                <>
                    <BurgerIngredients items={ingredients} toggleModalHandler={toggleModalHandler} modalOpened={modalOpened}/>
                    <BurgerConstructor items={ingredients} toggleModalHandler={toggleModalHandler} modalOpened={modalOpened}/>
                </>
            }
            </main>
            <ModalLayout modalOpened={modalOpened} toggleModalHandler={toggleModalHandler} escButtonHandler={escButtonHandler}/>
        </div>
      </StrictMode>
  );
}

export default App;
