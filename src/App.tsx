import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Shop} from './@components/Shop';
import {Catalog} from './@components/Catalog';
import {Layout} from './@components/Layout';
import {Man} from './@components/Man';
import {Woman} from './@components/Woman';
import {Product} from './@components/Product';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Shop />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/man" element={<Man />} />
                <Route path="/woman" element={<Woman />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/about" element={<Man />} />
                <Route path="/certificate" element={<Man />} />
                <Route path="/delivery" element={<Man />} />
                <Route path="/contacts" element={<Man />} />
            </Route>
        </Routes>
    );
}
