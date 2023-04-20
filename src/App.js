import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Skills from "./components/Skills";

function App() {
    return (
        <div className="App magicpattern">
            <NavBar />
            <MainPage />
            <Skills />
        </div>
    );
}

export default App;
