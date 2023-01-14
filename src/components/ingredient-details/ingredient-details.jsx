import styles from './ingredient-details.module.css'

function IngredientDetails({ingredients, ingredientId}){

    const ingredient = ingredients.filter(item => item._id === ingredientId);

    return(
        <>
            <h2 className={`mt-10 text text_type_main-large ${styles.title}`}>Детали Ингридиента</h2>
            <div className={styles.contentContainer}>
                <img className={`mb-4`} alt={ingredient[0].name} src={ingredient[0].image_large}/>
                <h3 className={`mb-8 text text_type_main-medium`}>{ingredient[0].name}</h3>
                <ul className={styles.energyWorth}>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Каллории, ккал</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{ingredient[0].calories}</p>
                    </li>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Белки, г</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{ingredient[0].proteins}</p>
                    </li>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Жиры, г</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{ingredient[0].fat}</p>
                    </li>
                    <li className={styles.energyElement}>
                        <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Углеводы, г</p>
                        <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{ingredient[0].carbohydrates}</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default IngredientDetails;