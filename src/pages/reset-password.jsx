import React, {useState} from "react";
import {Form} from "../components/form/form";
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

export const ResetPasswordPage = () => {
    const [form, setValue] = useState(
        {
            password: '',
            code: ''
        }
    )

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValue({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return(
        <Form
            header={'Восстановление пароля'}
            buttonText={'Сохранить'}
            bottomText1={'Вспомнили пароль? '}
            bottomPath1={'/login'}
            linkText1={'Войти'}
            onButtonClick={onSubmit}
        >
            <PasswordInput
                onChange={onChange}
                value={form.password}
                name={'password'}
            />
            <Input
                type={'text'}
                placeholder="Введите код из письма"
                onChange={onChange}
                value={form.code}
                name={'code'}
                error={false}
            />

        </Form>
    )
}