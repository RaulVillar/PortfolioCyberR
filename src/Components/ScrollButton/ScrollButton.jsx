import React, { useState, useEffect } from "react";
import './ScrollButton.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


export default function ScrollButton() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    });

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="scroll-button" onClick={scrollTop} style={{ display: showScroll ? "flex" : "none" }}>
            <i className="arrow-up" title="Scroll Up" ><ArrowCircleUpIcon fontSize="inherit"/></i>
        </div>
    );
}


