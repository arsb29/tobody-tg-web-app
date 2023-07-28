import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Shop} from 'local/src/@components/Shop';
import {Catalog} from 'local/src/@components/Catalog';
import {Layout} from 'local/src/@components/Layout';
import {Man} from 'local/src/@components/Man';
import {Woman} from 'local/src/@components/Woman';
import {Product} from 'local/src/@components/Product';


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
