import React from 'react';
import './card.css';
import CommonProps from "../../types/CommonProps";
import {Project} from "../../types/Project";
import {BubbleContainer} from "../bubble/Bubble";


interface CardProps extends CommonProps {
    children?: React.ReactNode;
    title: string;
    width?: number | string;
    height?: number | string;
}


interface ProjectCardProps extends CommonProps {
    children: Project;
    width?: number | string;
    height?: number | string;
}

export default function Card(props: Readonly<CardProps>) {
    return (
        <div
            className={"cardContainer"}
            style={{
                width: props.width || "",
                height: props.height || "",
                cursor: props.onClick ? "pointer" : "default"
            }}
            onClick={props.onClick}
        >
            <span className={"cardTitle"}>{props.title}</span>
            <hr className={"cardDivider"} />
            <div className={"cardContent"}>
                {props.children}
            </div>
        </div>
    );
}

export function ProjectCard(props: Readonly<ProjectCardProps>) {
    const [readme, setReadme] = React.useState<string>("Loading...");
    React.useEffect(() => {
        if (props.children.readme) {
            setReadme(props.children.readme);
        } else {
            fetch(props.children.url + "/blob/master/README.md")
                .then(response => response.text())
                .then(text => setReadme(text))
                .catch(() => setReadme("No README available"));
        }
    }, [props.children]);
    return (
        <Card height={"100vh"}
            title={props.children.name.replace(/[-_]/g, " ")}
            onClick={
            () => {
                window.open(props.children.url, "_blank");
            }
        }
            >
            <div>
                <span>
                    {readme}
                </span>
                <hr className={"cardDivider"} />
                <BubbleContainer>
                    {props.children.technologies}
                </BubbleContainer>

            </div>
        </Card>

    );
}
