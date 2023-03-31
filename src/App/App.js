import './App.scss';
import Projects from "../Projects/Projects";
import Introduction from "../Introduction/Introduction";
import Experiences from "../Experiences/Experiences";
import Contact from "../Contact/Contact";

function App() {
    return (
        <div className="App">
            {
                Projects()
            }
            {
                Introduction()
            }
            {
                Experiences()
            }
            {
                Contact()
            }
        </div>
    );
}

export default App;
