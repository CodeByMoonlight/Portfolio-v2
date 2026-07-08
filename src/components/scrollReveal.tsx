import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps extends HTMLAttributes<HTMLDivElement> {
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
    delay?: number;
    duration?: number;
    threshold?: number;
}

const getInitialVisibility = () => {
    if (typeof window === 'undefined') {
        return false;
    }

    const prefersReducedMotion =
        typeof window.matchMedia === 'function' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsObserver = typeof IntersectionObserver !== 'undefined';

    return prefersReducedMotion || !supportsObserver;
};

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 800,
    threshold = 0.1,
    className,
    style,
    ...rest
}: ScrollRevealProps) => {
    const [isVisible, setIsVisible] = useState(getInitialVisibility);
    const elementRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const currentElement = elementRef.current;

        if (!currentElement || isVisible) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                if (delay > 0) {
                    timeoutRef.current = window.setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                } else {
                    setIsVisible(true);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px',
            },
        );

        observer.observe(currentElement);

        return () => {
            if (timeoutRef.current !== null) {
                window.clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }

            observer.unobserve(currentElement);
            observer.disconnect();
        };
    }, [delay, threshold, isVisible]);

    const getInitialStyle = () => {
        switch (direction) {
            case 'up':
                return { transform: 'translateY(50px)', opacity: 0 };
            case 'down':
                return { transform: 'translateY(-50px)', opacity: 0 };
            case 'left':
                return { transform: 'translateX(50px)', opacity: 0 };
            case 'right':
                return { transform: 'translateX(-50px)', opacity: 0 };
            case 'fade':
                return { opacity: 0 };
            case 'scale':
                return { transform: 'scale(0.8)', opacity: 0 };
            default:
                return { transform: 'translateY(50px)', opacity: 0 };
        }
    };

    const getVisibleStyle = () => {
        return {
            transform: 'translateY(0) translateX(0) scale(1)',
            opacity: 1,
        };
    };

    return (
        <div
            ref={elementRef}
            className={className}
            style={{
                ...style,
                ...(!isVisible ? getInitialStyle() : getVisibleStyle()),
                transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            }}
            {...rest}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
