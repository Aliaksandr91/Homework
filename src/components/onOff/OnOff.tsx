import React from "react";
import './OnOff.css';
type OnOffPropsType = {
    status: boolean
}

export const OnOff = (props:OnOffPropsType) => {
    console.log('OnOff rendering')
    return (
        <div className="container">
            {props.status &&  <div className="block green">On</div>}
            {!props.status &&  <div className="block red">Off</div>}

            <div className="circle"></div>
        </div>)

}