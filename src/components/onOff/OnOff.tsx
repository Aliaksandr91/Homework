import React from "react";

type PropsType = {
    on: boolean
    setOn: (value:boolean)=> void
}


export const OnOff = (props: PropsType) => {

    console.log('OnOff rendering')

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
        cursor: 'pointer'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.setOn(true)}}>On
            </div>
            <div style={offStyle} onClick={() => {props.setOn(false)}}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>)

}