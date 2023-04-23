import Projects from "./components/Projects/Projects";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <div>
            <Toaster/>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
