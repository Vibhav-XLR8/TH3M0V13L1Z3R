import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeContainer from "../Container/Home";
import AboutContainer from "../Container/About";
import MovieContainer from "../Container/Movies";
import TvSeriesContainer from "../Container/WEBSeries";
import SearchContainer from "../Container/Search";
import DetailsContainer from "../Container/Details";
import NotFoundContainer from "../Container/NotFound";
import ContactContainer from "../Container/Contacts";

import FooterComponents from "../Components/Footer";
import HeaderComponents from "../Components/Header";

const RouterContainer = () => {
    return(
        <>
            <BrowserRouter>
                <HeaderComponents/>
                <Routes>
                    
                    <Route path="/" element={ <HomeContainer/> } />
                    <Route path="/about" element={ <AboutContainer/> } />
                    <Route path="/movies" element={ <MovieContainer/> } />
                    <Route path="/series" element={ <TvSeriesContainer/> } />
                    <Route path="/search" element={ <SearchContainer/> } />
                    <Route path="/details/:movieid/:mediatype" element={ <DetailsContainer/> } />
                    <Route path="/contact" element={ <ContactContainer/> } />
                    <Route path="/*" element={ <NotFoundContainer/> } />
                    
                </Routes>
                <FooterComponents/>
            </BrowserRouter>
        </>
    )
}

export default RouterContainer;