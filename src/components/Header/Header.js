import './Header.scss';
import { useEffect, useState } from "react";
import Bars from "../../images/svg/Bars";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import fr from "../../images/png/flags/fr.png";
import en from "../../images/png/flags/en.png";

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

    const changeLang = () => {
        const lang = i18next.language === 'en' ? 'fr' : 'en';
        i18next.changeLanguage(lang);
    }

    const setFlag = () => {
        const lang = i18next.language === 'en' ? 'fr' : 'en';
        switch (lang) {
            case 'fr':
                return fr;
            case 'en':
                return en;
            default:
                return en;
        }
    }

    return (
        <header style={ headerStyle }>
            <div className="navbar">
                <h1>Alexandre Vernet</h1>
                <nav>
                    <ul>
                        <li><a href={ "#about" }>{ t('header.home') }</a></li>
                        <li><a href={ "#about" }>{ t('header.about') }</a></li>
                        <li><a href={ "#projects" }>{ t('header.projects') }</a></li>
                        <li><a href={ "#contact" }>{ t('header.contact') }</a></li>
                        <li>
                            <img src={ setFlag() } onClick={ () => changeLang() } className="icon-lang" alt="lang"/>
                        </li>
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
