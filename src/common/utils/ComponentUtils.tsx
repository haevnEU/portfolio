import {StackElement} from "../types/StackElemet";
import {getIcon} from "./ResourceUtils";
import {getLevelColor} from "./ColorUtils";
import React from "react";

export const createElement = (element: StackElement) =>{
    const iconPath = getIcon(element.icon)

    return (
        <div className="skillElement">
            <img src={iconPath} alt={element.name} width={32}/>
            <span className={"label"}>{element.name}</span>
            <div className={"bar_bg"}>
                <div style={{
                    width: `${element.level * 10}%`,
                    height: "100%",
                    background: getLevelColor(element.level),
                    borderRadius: "6px"
                }} />
            </div>
            <span>{element.level} / 10</span>
        </div>
    )
}