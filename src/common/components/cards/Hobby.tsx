import React, {useEffect, useState} from 'react';
import './skills.css';
import {Info} from "../../types/Info";
import {SoftwareStack} from "../../types/SoftwareStack";
import {getIcon} from "../../utils/ResourceUtils";
import {StackElement} from "../../types/StackElemet";
import Glow from "../glow/glow";
import {createElement} from "../../utils/ComponentUtils";
import {Bubble, BubbleContainer} from "../bubble/Bubble";

interface HobbySectionProps {
    hobbies: string[];
    interests: string[];
    langugages: string[];
    glow: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
}

function HobbySection(props: HobbySectionProps) {
    return (
                <Glow color={props.glow} className="container">
                    <div>
                        <h2>My Languages</h2>
                        <BubbleContainer>{
                            props.langugages
                        }</BubbleContainer>
                    </div>
                    <div>
                        <h2>My Hobbies</h2>
                            <BubbleContainer>{
                                props.hobbies
                            }</BubbleContainer>
                    </div>
                    <div>
                        <h2>My Interests</h2>
                        <BubbleContainer>{
                            props.interests
                        }</BubbleContainer>
                    </div>
          </Glow >
    );
}

export default HobbySection;