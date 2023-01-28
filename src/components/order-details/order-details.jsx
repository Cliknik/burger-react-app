import styles from './order-details.module.css'
import icon from '../../images/icon-done.png'

function OrderDetails(props){
    const {orderNumber} = props;

    return(
        <div className={styles.contentContainer}>
            <h2 className={`text text_type_digits-large pt-30 pb-8 ${styles.textGlow}`}>{orderNumber}</h2>
            <p className={`text text_type_main-medium`}>идентификатор заказа</p>
            <img src={icon} alt={'иконка готовности заказа'} className={`pb-15 pt-15`}/>
            <p className={`text text_type_main-default pb-2`}>Ваш заказ начали готовить</p>
            <p className={`text text_type_main-default text_color_inactive mb-30`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;