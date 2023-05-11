import React from 'react'
import {Link} from "react-router-dom";

import styles from './form.module.css'
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const Form = ({
                         header,
                         buttonText,
                         children,
                         bottomText1,
                         bottomText2,
                         bottomPath1,
                         bottomPath2,
                         linkText1,
                         linkText2
}) => {

    const BottomNavigation = ({
                                  bottomText1,
                                  bottomPath1,
                                  linkText1,
                                  bottomText2,
                                  bottomPath2,
                                  linkText2
    }) => {
        return (<div className={styles.bottomTextContainer}>
            {
                bottomText1 && bottomPath1 ?
                    <p className="text text_type_main-small">
                        {bottomText1}
                        <Link to={bottomPath1} className={styles.link}>
                            {linkText1}
                        </Link>
                    </p>
                    : null
            }
            {
                bottomText2 && bottomPath2 ?
                    <p className="text text_type_main-small">
                        {bottomText2}
                        <Link to={bottomPath2} className={styles.link}>
                            {linkText2}
                        </Link>
                    </p>
                    : null
            }
        </div>)
    }
    return(
        <div className={styles.container}>
            <h1 className="text text_type_main-medium">
                {header}
            </h1>
            <form className={styles.form}>
                {children}
            </form>
            <Button size="medium" type="primary" style={{ marginBottom: '56px'}}>
                {buttonText}
            </Button>
            <BottomNavigation
                bottomText1={bottomText1}
                bottomPath1={bottomPath1}
                linkText1={linkText1}
                bottomText2={bottomText2}
                bottomPath2={bottomPath2}
                linkText2={linkText2}
            />
        </div>
    )
}