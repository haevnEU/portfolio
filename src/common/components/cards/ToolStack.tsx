import React, {useEffect, useState} from 'react';
import './skills.css';
import {Info} from "../../types/Info";
import {SoftwareStack} from "../../types/SoftwareStack";
import {getIcon} from "../../utils/ResourceUtils";
import {StackElement} from "../../types/StackElemet";
import Glow from "../glow/glow";

interface DatabseSectionProps {
    stack: StackElement[];
    glow: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
}

function DatabseSection(props: DatabseSectionProps) {
    const createElement = (element: StackElement) =>{
        const iconPath = getIcon(element.icon)

        return (
            <div className="skillElement">
                <img src={iconPath} alt={element.name} width={32}/>
                <span>{element.name}</span>
            </div>
        )
    }
    return (
                <Glow color={props.glow} className="container">
                    <h2>Database Stack</h2>
                    <div className={"databaseEntryContainer"}>
                            {props.stack.map(element => (
                                createElement(element)
                            ))}
                    </div>
            </Glow >
    );
}

export default DatabseSection;