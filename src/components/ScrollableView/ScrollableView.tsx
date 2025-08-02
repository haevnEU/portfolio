import React, { useRef, useEffect } from 'react';
import './ScrollableView.css';

interface ScrollProps {
    direction: 'vertical' | 'horizontal';
    className?: string;
    width?: string;
    height?: string;
    autoScroll?: boolean;
    scrollSpeed?: number;
    scrollInterval?: number;
    children?: React.ReactNode | string;
}

const Scroll: React.FC<ScrollProps> = ({
                                           direction,
                                           className,
                                           width,
                                           height,
                                           autoScroll,
                                           scrollSpeed,
                                           scrollInterval,
                                           children,
                                       }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!autoScroll || !containerRef.current) return;

        const speed = scrollSpeed ?? 1;
        const interval = scrollInterval ?? 20;

        const scroll = () => {
            const el = containerRef.current!;
            if (direction === 'vertical') {
                if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
                    el.scrollTop = 0;
                } else {
                    el.scrollTop += speed;
                }
            } else {
                if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
                    el.scrollLeft = 0;
                } else {
                    el.scrollLeft += speed;
                }
            }
        };

        const timer = setInterval(scroll, interval);
        return () => clearInterval(timer);
    }, [autoScroll, direction, scrollSpeed, scrollInterval, children]);

    return (
        <div
            className={className}
            style={{ width: width ?? "", height: height ?? "" }}
            ref={containerRef}
        >
            {children}
        </div>
    );
};

interface ScrollableViewProps {
    disabled?: boolean;
    children?: React.ReactNode | string;
    width?: string;
    height?: string;
    autoScroll?: boolean;
    scrollSpeed?: number;
    scrollInterval?: number;
}

export const VerticalScrollableView: React.FC<ScrollableViewProps> = (props) => (
    <Scroll
        direction="vertical"
        className="verticalScrollableView"
        width={props.width}
        height={props.height}
        autoScroll={props.autoScroll}
        scrollSpeed={props.scrollSpeed}
        scrollInterval={props.scrollInterval}
    >
        {props.children}
    </Scroll>
);

export const HorizontalScrollableView: React.FC<ScrollableViewProps> = (props) => (
    <Scroll
        direction="horizontal"
        className="horizontalScrollableView"
        width={props.width}
        height={props.height}
        autoScroll={props.autoScroll}
        scrollSpeed={props.scrollSpeed}
        scrollInterval={props.scrollInterval}
    >
        {props.children}
    </Scroll>
);