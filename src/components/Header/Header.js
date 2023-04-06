import './Header.scss';
import { useEffect, useState } from "react";
import Bars from "../../images/svg/Bars";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation('common');
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
            <div className="navbar">
                <h1>Alexandre Vernet</h1>
                <nav>
                    <ul>
                        <li><a href={ "#about" }>{t('header.home')}</a></li>
                        <li><a href={ "#about" }>{t('header.about')}</a></li>
                        <li><a href={ "#projects" }>{t('header.projects')}</a></li>
                        <li><a href={ "#contact" }>{t('header.contact')}</a></li>
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
