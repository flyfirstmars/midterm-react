import React from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/home";
import Posts from "./components/pages/posts";
import About from "./components/pages/about";
import PostView from "./components/pages/posts/postView";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <div className='main'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/posts/:id" element={<PostView/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default App;
