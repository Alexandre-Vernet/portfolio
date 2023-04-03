import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Alexandre Vernet</h1>
                <nav>
                    <ul>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
