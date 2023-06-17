import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Shop} from './@components/Shop';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Shop />}></Route>
        </Routes>
    );
}
