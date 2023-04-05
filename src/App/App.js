import './App.scss';
import Projects from "../Components/Projects/Projects";
import About from "../Components/About/About";
import Header from "../Components/Header/Header";

function App() {
    return (
        <div>
            <Header/>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;
