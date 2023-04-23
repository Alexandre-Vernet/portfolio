import './Header.scss';
import { useEffect, useState } from "react";
import Bars from "../../images/svg/Bars";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import fr from "../../images/png/flags/fr.png";
import en from "../../images/png/flags/en.png";
import XMark from "../../images/svg/XMark";

const Header = () => {
    const { t } = useTranslation('common');
    const [scrollPosition, setScrollPosition] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [responsiveMenu, setResponsiveMenu] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        const handleResize = () => {
            const width = window.innerWidth;
            setWidth(width);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const headerStyle = width > 768 ? {
        backgroundColor: scrollPosition > 30 ? "#1c2029" : "transparent",
    } : {};


    const changeLang = () => {
        const lang = i18next.language === 'en' ? 'fr' : 'en';
        i18next.changeLanguage(lang);
        closeMenu();
    }

    const setFlag = () => {
        const lang = i18next.language;
        storeLangInLocalStorage(lang);
        switch (lang) {
            case 'fr':
                return fr;
            case 'en':
            default:
                return en;
        }
    }

    const storeLangInLocalStorage = (lang) => {
        localStorage.setItem('lang', lang);
    }

    const toggleMenu = () => {
        setResponsiveMenu(!responsiveMenu);
        const menu = document.querySelector('nav');
        menu.classList.toggle('active');
    }

    const closeMenu = () => {
        const menu = document.querySelector('nav');
        menu.classList.remove('active');
        setResponsiveMenu(false);
    }

    return (
        <header style={ headerStyle }>
            <div className="navbar">
                <h1 className="name">{ t('my_name') }</h1>
                <div className="navbar-title-responsive">
                    <h1>{ t('my_name') }</h1>
                    <div className="bars" onClick={ toggleMenu }>
                        {
                            responsiveMenu ? <XMark/> : <Bars/>
                        }
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={ "#about" } onClick={ closeMenu }>{ t('header.about') }</a>
                        </li>
                        <li>
                            <a href={ "#skills" } onClick={ closeMenu }>{ t('header.skills') }</a>
                        </li>
                        <li>
                            <a href={ "#projects" } onClick={ closeMenu }>{ t('header.projects') }</a>
                        </li>
                        <li>
                            <a href={ "#contact" } onClick={ closeMenu }>{ t('header.contact') }</a>
                        </li>
                        <li>
                            <img src={ setFlag() } onClick={ changeLang } className="icon-lang" alt="lang"/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
