import React, {useEffect, useState} from 'react';
import './skills.css';
import {Info} from "../../types/Info";
import {SoftwareStack} from "../../types/SoftwareStack";
import {getIcon} from "../../utils/ResourceUtils";
import {StackElement} from "../../types/StackElemet";
import Glow from "../glow/glow";
import {createElement} from "../../utils/ComponentUtils";
import {Bubble, BubbleContainer} from "../bubble/Bubble";
import {getLevelColor} from "../../utils/ColorUtils";

interface ContactSectionProps {
    info: Info;
    glow: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
}

function ContactSection(props: ContactSectionProps) {
    const createEntry = (icon: string, label: string, value: string, onClick?: () => void) => {
        const iconPath = getIcon(icon);
        return (
            <div
                className={`skillElement${onClick ? " clickable" : ""}`}
                onClick={onClick}>
                <img src={iconPath} alt={label} width={32}/>
                <span className={"label_10"}>{label}</span>
                <span className={"label_10"}>{value}</span>
            </div>
        );
    }
    return (
                <Glow color={props.glow} className="container">
                    <div>
                        <h2>Contact</h2>
                        <span>Interested in getting in touch? Feel free to send me a message</span>
                        <span>I'm always happy to connect and answer your questions!</span>
                        <span>{props.info.contact.name} - {props.info.contact.familyName}</span>
                        {createEntry("earth.svg", "Location", props.info.contact.location)}
                        {createEntry("mail.svg", "Mail", props.info.contact.email, () => {
                            window.open(`mailto:${props.info.contact.email}`, "_blank");
                        })}

                    </div>
          </Glow >
    );
}

export default ContactSection;