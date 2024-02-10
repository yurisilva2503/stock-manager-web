import { Outlet } from "react-router-dom";
import Navbar from "./components/Navegacao";
import Footer from "./components/Rodape";

import "./styles/reset.css";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;