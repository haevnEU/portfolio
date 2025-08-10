import React from 'react';
import './button.css';
import '../../types/CommonProps'
import CommonProps from "../../types/CommonProps";
import {getIcon} from "../../utils/ResourceUtils";

// make props
interface CButtonProps extends CommonProps {
    children?: string;
}
interface IconButtonProps extends CommonProps {
    imageName: string;
}


function CButton(props: CButtonProps) {
    return (
        <div className={`buttonBase ${props.theme} ${props.className ?? ""}`} onClick={props.onClick}>
            {props.children ? props.children : "Click Me!"}
        </div>
    );
}

export default CButton;

export const IconButton = (props: IconButtonProps) => {
    return (
    <div className={`imageButton ${props.className ?? ""}`}>
        <img src={getIcon(props.imageName)} width={"64px"} alt={props.imageName} onClick={props.onClick} />
    </div>
    );
}