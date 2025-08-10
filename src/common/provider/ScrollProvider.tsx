import {createContext, useContext, useEffect, useRef, useState} from "react";
import "./scroll.css";

type ScrollContextType = {
    index: number;
    maxIndex: number;
    setIndex: (index: number) => void;
};

interface scrollProviderProps {
    children: React.ReactNode;
    maxSize: number;
}

export const ScrollContext = createContext<ScrollContextType>({
    index: 0,
    maxIndex: 0,
    setIndex: () => {},
});
export const ScrollProvider = (props: scrollProviderProps) => {
    const [index, setIndex] = useState(0);
    const isThrottled = useRef(false);
    const [maxIndex, setMaxIndex] = useState(props.maxSize - 1);
    const changeIndex = (change: number) => {
        let newIndex = index + change;
        if(newIndex < 0){
            newIndex = maxIndex - 1;
        }else if(newIndex >= maxIndex){
            newIndex = 0;
        }
        console.log(newIndex + " " + maxIndex);

        setIndex(newIndex);
    }

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            if(isThrottled.current) {
                return;
            }
            isThrottled.current = true;
            if(event.deltaY > 0) {
                changeIndex(1);
            }else {
                changeIndex(-1);
            }

            setTimeout(() => isThrottled.current = false, 500);
        }

        let touchStartX = 0;
        const handleTouchStart = (event: TouchEvent) => {
            touchStartX = event.touches[0].screenX;
        }

        const handleTouchEnd = (event: TouchEvent) => {
            event.preventDefault();
            const touchEndX = event.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            const threshold = 50; // Minimum distance to trigger scroll
            if(Math.abs(diff) < threshold) {
                return;
            }
            if(diff > 0) {
                changeIndex(1);
            }else {
                changeIndex(-1);
            }
        }

        window.addEventListener("wheel", handleWheel, {passive: true});
        window.addEventListener("touchstart", handleTouchStart, {passive: true});
        window.addEventListener("touchend", handleTouchEnd, {passive: true});

        setMaxIndex(props.maxSize);
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [index, maxIndex]);

    return (
        <ScrollContext.Provider value={{index, setIndex, maxIndex}}>
            {props.children}
        </ScrollContext.Provider>
    );
}

export const useScrollContext = () => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within a ScrollProvider");
    }
    return context;
};

export const IndexIndicator = () => {
    const {index, maxIndex, setIndex} = useScrollContext();
    return (
        <div className={"indicator"}>
            {Array.from({length: maxIndex}, (_, i) => (
                <span
                    key={i}
                    className={`indicator-dot${i === index ? " active" : ""}`}
                    onClick={() => setIndex(i)}
                />            ))}
        </div>
    );
}