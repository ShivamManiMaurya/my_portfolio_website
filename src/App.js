import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <div className="App magicpattern">
            <NavBar />
            <MainPage />
            <Skills />
            <Projects />
            <AboutMe />
        </div>
    );
}

export default App;
