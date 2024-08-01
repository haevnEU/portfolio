import {SocialIcons} from "@/components/Icons";
import {NeonGradientCard} from "@/components/magicui/neon-gradient-card";
import repos from "../../assets/json/repos.json";
import CV from "@/assets/json/cv.json";

export function ProfileBoard() {
    return (
        <NeonGradientCard>
            <span
                className="pointer-events-none items-center flex flex-col bg-white bg-clip-text text-left text-9xl font-semibold leading-none text-transparent dark:white ">
                <p>{CV.name}</p>
            </span>
            <div
                className="pointer-events-none items-center justify-center flex space-x-2 bg-white bg-clip-text text-left text-3xl font-semibold leading-none text-transparent dark:white">
                <p>Erster git commit vor</p>
                <div className="min-h-10"/>
                <NumberTicker
                    value={Math.ceil((new Date().getTime() - new Date(2017, 4, 18).getTime()) / (1000 * 3600 * 24))}/>
                <p>Tagen</p>
            </div>
            <div/>
            <Marquee pauseOnHover className="[--duration:60s]">
                {repos.map((review) => (<RepositoryCard key={review.name} {...review} />))}
            </Marquee>
            <SocialDock/>
        </NeonGradientCard>

    );
}


import React from "react";

import {Dock, DockIcon} from "@/components/magicui/dock";
import NumberTicker from "@/components/magicui/number-ticker";
import Marquee from "@/components/magicui/marquee";
import {RepositoryCard} from "@/components/ui/RepositoryCard";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function SocialDock() {
    return (
        <div className="relative">
            <Dock direction="middle">
                <DockIcon>
                    <SocialIcons.gitHub/>
                </DockIcon>
                <DockIcon>
                    <SocialIcons.linkedIn/>
                </DockIcon>
                <DockIcon>
                    <SocialIcons.xing/>
                </DockIcon>
                <DockIcon>
                    <SocialIcons.twitter/>
                </DockIcon>
            </Dock>
        </div>
    );
}
