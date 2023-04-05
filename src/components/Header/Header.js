import './Header.scss';
import { useEffect, useState } from "react";
import Bars from "../../Images/svg/Bars";

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const headerStyle = {
        backgroundColor: scrollPosition > 30 ? "#1c2029" : "transparent",
    };

    return (
        <header style={ headerStyle }>
            <div className="container">
                <h1>Alexandre Vernet</h1>
                <nav>
                    <ul>
                        <li><a href="#about">Accueil</a></li>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#projects">Mes projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="bars">
                    <Bars/>
                </div>
            </div>
        </header>
    );
}

export default Header;
