import styles from './ingredient-details.module.css'

function IngredientDetails({image, name, calories, proteins, fats, carbohydrates}){
    return(
        <>
            <h1 className={`ml-10 mt-10 text text_type_main-large`}>Детали Ингридиента</h1>
            <div className={styles.contentContainer}>
                <img alt={name} className={`mb-4`}/>
                <h2 className={`mb-8`}>{name}</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}