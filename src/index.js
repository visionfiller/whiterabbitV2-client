import React from 'react';
import  { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { WhiteRabbit } from './WhiteRabbit';
 import './index.css';



const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <WhiteRabbit/>
    </BrowserRouter>
)
