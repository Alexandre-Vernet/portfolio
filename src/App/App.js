import logo from '../logo.svg';
import './App.scss';
import Projects from "../Projects/Projects";
import Introduction from "../Introduction/Introduction";
import Experiences from "../Experiences/Experiences";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo } className="App-logo" alt="logo"/>
                <p>
                    Hello World !
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            {
                Projects()
            }
            {
                Introduction()
            }
            {
                Experiences()
            }
        </div>
    );
}

export default App;
