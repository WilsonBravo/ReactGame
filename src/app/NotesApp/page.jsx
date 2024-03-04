import React from "react"
import ReactDOM from "react-dom"
import 'react-mde/lib/styles/css/react-mde-all.css';

import { Karla } from "next/font/google";
const karla = Karla({ subsets: ["latin"] });

import App from "./App"

export default function Page () {
    return(
        <div className={karla.className}>
            <App/>
        </div>
    )
}