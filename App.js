import React from 'react'
import Searchplace from "./components/Searchplace"
import Climate from "./components/Climate"

import { Body, Header } from "./Style";

function App() {
    return (
        <Body>
        <Header> Weather application </Header>
        <Searchplace/>
        </Body>
    )
}

export default App