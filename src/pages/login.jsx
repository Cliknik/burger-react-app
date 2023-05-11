import React from 'react'
import {useState} from "react";
import {useNavigate} from 'react-router-dom'

import {EmailInput, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'

import {Form} from "../components/form/form";
import {useDispatch} from "react-redux";

export const LoginPage = () => {
    const [form, setValue] = useState({
        password: '',
        email: ''
    })

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onChange = (e) => {
        setValue({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault();

    }

    return (
        <Form
            header={'Вход'}
            buttonText={'Войти'}
            bottomText1={'Вы - новый пользователь? '}
            bottomText2={'Забыли пароль? '}
            bottomPath1={'/register'}
            bottomPath2={'/forgot-password'}
            linkText1={'Зарегистрироваться'}
            linkText2={'Восстановить пароль'}
            onButtonClick={onSubmit}
        >
            <EmailInput
                onChange={onChange}
                value={form.email}
                name={'email'}
                placeholder="E-mail"
            />
            <PasswordInput
                onChange={onChange}
                value={form.password}
                name={'password'}
            />

        </Form>
    )
}