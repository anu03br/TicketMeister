import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx'
import Footerbar from "./components/Footerbar.tsx";
import About from "./sites/About.tsx";
import Home from "./sites/Home.tsx";

// always run "npm run tail" to watch for css changes (if you don't some classes won't work)
// npm run tail = "npx tailwindcss -i ./src/app.css -o ./src/tailwind.css --watch"
//npm run serve = start vite

function App() {

    return (
        <main className={"flex flex-col min-h-screen"}>
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    <Route  path="about" element={ <About/> }/>
                </Routes>
            </Router>
            <Footerbar/>
        </main>


    )
}

export default App
