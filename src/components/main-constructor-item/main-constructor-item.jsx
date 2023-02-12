import React, {useRef} from "react";
import {useDrop, useDrag} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import styles from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {sortConstructorIngredients} from "../../services/actions/constructorData";

const MainConstructorItem = ({handleDelete, index, item}) => {
    const main = useSelector(store => store.constructorData.main)
    const dispatch = useDispatch();
    const ref = useRef(null)
    const id = item._id

    const [{onHover}, dropRef] = useDrop({
        accept: 'constructor-main-item',
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            //Вычислям индекс перетаскиваемого эл-та и целевого
            const dragIndex = item.index;
            const hoverIndex = index;

            //Если эл-т сам над собой - ничего не делаем
            if (dragIndex === hoverIndex) {
                return;
            }

            //Определим положение элемента, над которым проносим перетаскиваемый элемент
            const middleOfHoveredElement = (ref.current.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().top) / 2;

            //Определим положение перестаскиваемого элемента
            const draggableElementPosition = monitor.getClientOffset().y - ref.current.getBoundingClientRect().top;

            if (dragIndex < hoverIndex && draggableElementPosition < middleOfHoveredElement) {
                return;
            }

            if (dragIndex > hoverIndex && draggableElementPosition > middleOfHoveredElement) {
                return;
            }

            //Вызываем экшен сортировки
            dispatch(sortConstructorIngredients(dragIndex, hoverIndex, main))

            //Присваиваем новый индекс
            item.index = hoverIndex;

        },
        collect: monitor => ({
            onHover: monitor.isOver()
        })
    });

    const [{opacity}, dragTarget] = useDrag({
        type: 'constructor-main-item',
        item: () => {
            return { id , index}
        },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })

    dropRef(dragTarget(ref))

    return (
        <div ref={ref}  className={styles.ingredientContainer} key={item.id} style={{opacity}}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                extraClass={styles.ingredientElement}
                id={item.id}
                index={index}
                handleClose={() => {
                    handleDelete(item.id)
                }}
            />
        </div>
    )
}

export default MainConstructorItem;