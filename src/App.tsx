import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx'
import Footerbar from "./components/Footerbar.tsx";
import About from "./sites/About.tsx";
import Home from "./sites/Home.tsx";

// always run this to watch for css changes (if you don't some classes won't work)
// npx tailwindcss -i ./src/app.css -o ./src/tailwind.css --watch


// const eventPicturePath : string = "uk.tmconst.com/ccp-salesforce-images/CH/20230720_tom-walker_1440x450.png?auto=webp"
// const eventName : string = "Tom Walker"

function App() {

    return (
        <main>
            <Navbar/>
            <img className={"w-1/2  h-auto"} alt={"some image"} src={"https://s1.ticketm.net/dam/a/a45/2f33ead7-46bf-4ad9-ac56-15686cd23a45_RETINA_PORTRAIT_16_9.jpg"}></img>
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
