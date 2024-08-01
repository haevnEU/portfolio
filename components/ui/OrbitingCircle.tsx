import OrbitingCircles from "@/components/magicui/orbiting-circles";

import {Icons} from "@/components/Icons";

export function OrbitingCircle() {
    return (
        <div
            className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

            {/* Inner Circles */}
            <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={0} radius={80}>
                <Icons.java/>
            </OrbitingCircles>
            <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={5} radius={80}>
                <Icons.c/>
            </OrbitingCircles>

            <OrbitingCircles className="size-[30px] border-none bg-transparent" duration={20} delay={10} radius={80}>
                <Icons.cpp/>
            </OrbitingCircles>
            {/* Outer Circles (reverse) */}
            <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={190} duration={20} reverse>
                <Icons.git/>
            </OrbitingCircles>
            <OrbitingCircles className="size-[50px] border-none bg-transparent" radius={190} duration={20} delay={20}
                             reverse>
                <Icons.gitHub/>
            </OrbitingCircles>
        </div>
    );
}
