import React, {StrictMode, useEffect} from 'react';
import {useDispatch} from "react-redux";
import { Routes, Route} from "react-router-dom";

import appStyles from './app.module.css'

import AppHeader from "../app-header/app-header";

import {LoginPage, MainPage, ForgotPasswordPage, RegisterPage, ResetPasswordPage, ProfilePage} from "../../pages";

import {url} from '../../utils/constants';
import {getIngredientsData} from "../../services/actions/ingredientsData";

function App() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getIngredientsData(`${url}ingredients`))
    }, [dispatch])

    return (
      <StrictMode>
        <div className={appStyles.App}>
            <AppHeader />
            <main className={appStyles.burgerContainer}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password" element={ <ResetPasswordPage /> } />
                    <Route path="/profile" element={ <ProfilePage /> } />
                    {/*<Route path="/ingredients/:id" />*/}
                    {/*<Route path="*" element={ <PageNotFound />} />*/}
                </Routes>
            </main>
        </div>
      </StrictMode>
  );
}

export const MemoizedApp = React.memo(App) ;
