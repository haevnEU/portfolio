import React, {useEffect, useState} from 'react';
import './skills.css';
import {SoftwareStack} from "../../types/SoftwareStack";
import {getIcon} from "../../utils/ResourceUtils";
import {StackElement} from "../../types/StackElemet";
import Glow from "../glow/glow";
import {getLevelColor} from "../../utils/ColorUtils";
import {createElement} from "../../utils/ComponentUtils";

interface ProfileSectionProps {
    stack: SoftwareStack;
    stackName: string;
    glowColor: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
}

function SkillsSection(props: ProfileSectionProps) {
   return (
        <Glow color={props.glowColor} className={"container"}>
            <h2>My {props.stackName} Stack</h2>
            <div className={"techEntryContainer"}>
                <div>
                    {props.stack.languages.map(language => (
                        createElement(language)
                    ))}
                </div>
                <div>
                    {props.stack.frameworks.map(language => (
                        createElement(language)
                    ))}
                </div>
            </div>
        </Glow>
    );
}

export default SkillsSection;