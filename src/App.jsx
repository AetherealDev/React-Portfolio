// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

function App() {
    return (
        <>
            <Header />
            <main className="mx-3">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
