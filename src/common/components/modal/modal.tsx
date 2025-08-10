import React from 'react';
import './modal.css';
import Glow from "../glow/glow";

interface ModalProps {
    children: React.ReactNode;
    glow: "None" | "Default" | "Blue" | "Red" | "Green" | "Yellow" | "Purple";
    className?: string;
    visibility: boolean;
    setVisibility: (visibility: boolean) => void;
}

export default function Modal(props: ModalProps) {

    const hide = (e: KeyboardEvent | undefined) => {
        if(e === undefined){
            props.setVisibility(false);
        } else if (e.key === 'Escape') {
            props.setVisibility(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', hide);
        return () => {
            document.removeEventListener('keydown', hide);
        };
    }, []);

    return (
        props.visibility ?
            <div className={"modal_bg"} onClick={() =>hide(undefined)} >
                <Glow color={"Purple"} className={`modal_content` + (props.className ? ` ${props.className}` : '')}>
                        {
                            props.children
                        }
                </Glow>
            </div>
            : <div/>
    );
}

