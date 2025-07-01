import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import "./styles.css";
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        isVisible && (
            <button className="scroll-top-button" onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        )
    );
}

export default ScrollToTop