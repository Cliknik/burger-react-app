import styles from './ingredient-details.module.css'

function IngredientDetails({ingredients, ingredientId}){

    ingredients.filter((item) => {
        if (item.id === ingredientId) {
            console.log(item)
            return(
                <>
                    <h2 className={`mt-10 text text_type_main-large ${styles.title}`}>Детали Ингридиента</h2>
                    <div className={styles.contentContainer}>
                        <img className={`mb-4`} alt={item.name} src={item.image_large}/>
                        <h3 className={`mb-8 text text_type_main-medium`}>{item.name}</h3>
                        <ul className={styles.energyWorth}>
                            <li className={styles.energyElement}>
                                <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Каллории, ккал</p>
                                <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{item.calories}</p>
                            </li>
                            <li className={styles.energyElement}>
                                <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Белки, г</p>
                                <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{item.proteins}</p>
                            </li>
                            <li className={styles.energyElement}>
                                <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Жиры, г</p>
                                <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{item.fat}</p>
                            </li>
                            <li className={styles.energyElement}>
                                <p className={`text text_type_main-default text_color_inactive ${styles.energyName}`}>Углеводы, г</p>
                                <p className={`text text_type_digits-default text_color_inactive ${styles.energyName}`}>{item.carbohydrates}</p>
                            </li>
                        </ul>
                    </div>
                </>
            )
        }
    })
}
export default IngredientDetails;