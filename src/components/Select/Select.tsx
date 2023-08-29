import classes from './Select.module.css'
import {useEffect, useState} from "react";
import {KeyboardEvent} from "react";

type ItemType = {
    title: string
    value?: any
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value]);
    const toggleItems = () => setActive(!active)
    //const itemClicked = (value:any) =>props.onChange(value)
    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        setHoveredElementValue(pretendentElement.value)
                        break
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }
    return (
        <div className={classes.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={classes.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={classes.items}>
                    {props.items.map((item, index) => <div
                        onMouseEnter={() => setHoveredElementValue(item.value)}
                        className={classes.item + ' ' + (hoveredItem === item ? classes.selected : '')} key={index}
                        onClick={() => onItemClick(item.value)}>{item.title}</div>)}
                </div>
            }
        </div>
    )
}

//--------------------------------------------------------------------------------
// import classes from './Select.module.css'
// import {useState} from "react";
//
// type ItemType = {
//     title: string
//     value?: any
// }
// type SelectPropsType = {
//     value: any
//     onChange: (value: any) => void
//     items: ItemType[]
// }
// export const Select = (props: SelectPropsType) => {
//     const [active, setActive] = useState(false)
//
//     const selectedItem = props.items.find(item => item.value === props.value)
//     return (
//         <div className={classes.select}>
//             <h3>{selectedItem && selectedItem?.title}</h3>
//             <div className={classes.items + ' ' + (active ? classes.active : '')}>
//                 {props.items.map(item => <div>{item.title}</div>)}
//             </div>
//         </div>
//     )
// }