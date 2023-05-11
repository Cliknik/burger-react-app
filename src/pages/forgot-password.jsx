import React, {useState} from "react";
import {Form} from "../components/form/form";
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";

export const ForgotPasswordPage = () => {

    const [form, setValue] = useState(
        {email: ''}
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
            buttonText={'Восстановить'}
            bottomText1={'Вспомнили пароль? '}
            bottomPath1={'/login'}
            linkText1={'Войти'}
            onButtonClick={onSubmit}
        >
            <EmailInput
                value={form.email}
                onChange={onChange}
                name={'email'}
                placeholder="Укажите e-mail"
            />

        </Form>
    )
}