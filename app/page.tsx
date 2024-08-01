import {ProfileBoard} from "@/components/ui/ProfileBoard";
import React from "react";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";


export default function Home() {
    return (
        <main className="min-h-screen flex items-center p-12">
            <ProfileBoard/>
            <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={5} repeatDelay={2}/>
        </main>
    );
}
