import React from 'react';
import HomePage from "./pages/HomePage.jsx";
import CreateProducetPage from "./pages/CreateProducetPage.jsx";
import ProduectPage from "./pages/ProduectPage.jsx";
import ProducetEditePage from "./pages/ProducetEditePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/create' element={<CreateProducetPage/>}></Route>
                <Route path='/' element={<ProduectPage/>}></Route>
                <Route path='/edit/:id' element={<ProducetEditePage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;