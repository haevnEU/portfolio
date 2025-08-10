import React, {useEffect, useState} from 'react';
import './skills.css';
import {Info} from "../../types/Info";
import {SoftwareStack} from "../../types/SoftwareStack";
import {getIcon} from "../../utils/ResourceUtils";
import {StackElement} from "../../types/StackElemet";
import Glow from "../glow/glow";
import {createElement} from "../../utils/ComponentUtils";

interface DatabseSectionProps {
    stack: StackElement[];
    os: StackElement[];
    glow: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
}

function DatabseSection(props: DatabseSectionProps) {
    return (
                <Glow color={props.glow} className="container">
                    <div>
                        <h2>My Databases Stack</h2>
                        <div className={"techEntryContainer"}>
                            {props.stack.map(element => (
                                createElement(element)
                            ))}
                        </div>
                    </div>

<div>          <h2>My Operating System Stack</h2>
                    <div className={"techEntryContainer"}>
                        {props.os.map(element => (
                            createElement(element)
                        ))}
                    </div>
</div>
            </Glow >
    );
}

export default DatabseSection;