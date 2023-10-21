import React, { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface iAnimation {
    position: string
    children: ReactNode
    className: string
}

const Animation: React.FC<iAnimation> = ({ position, children, className }) => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            throttleDelay: 99,
            offset: 120,
            delay: 0.5,
            duration: 600,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        })
    }, [])
    return (
        <div className={className} data-aos={position}>
            {children}
        </div>
    )
}

export default Animation;