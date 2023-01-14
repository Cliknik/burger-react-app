import styles from './ingredient-details.module.css'

function IngredientDetails({image, name, calories, proteins, fats, carbohydrates}){
    return(
        <>
            <h2 className={`mt-10 text text_type_main-large ${styles.title}`}>Детали Ингридиента</h2>
            <div className={styles.contentContainer}>
                <img alt={name} className={`mb-4`} src={image}/>
                <h3 className={`mb-8 text text_type_main-medium`}>Краторная булка N-200i</h3>
                <ul className={styles.energyWorth}>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Каллории, ккал</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{calories}</p>
                    </li>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Белки, г</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{proteins}</p>
                    </li>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Жиры, г</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{fats}</p>
                    </li>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Углеводы, г</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default IngredientDetails;