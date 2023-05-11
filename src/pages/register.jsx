import React, {useState} from "react";
import {Form} from "../components/form/form";
import {EmailInput, PasswordInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";

export const RegisterPage = () => {
    const [form, setValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setValue({
            ...form,
            [e.target.name] : e.target.value
        })
        console.log(form)
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return(
            <Form
                header={'Регистрация'}
                buttonText={'Зарегистрироваться'}
                bottomText1={'Уже зарегистрированы? '}
                bottomPath1={'/login'}
                linkText1={'Войти'}
                onButtonClick={onSubmit}
            >
                <Input
                    type={'text'}
                    placeholder="Имя"
                    onChange={onChange}
                    value={form.name}
                    name={'name'}
                    error={false}
                />
                <EmailInput
                    onChange={onChange}
                    value={form.email}
                    name={'email'}
                    placeholder="E-Mail"
                />
                <PasswordInput
                    onChange={onChange}
                    value={form.password}
                    name={'password'}
                />
            </Form>
    )
}