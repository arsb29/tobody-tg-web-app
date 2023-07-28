import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Layout} from 'local/src/components/Layout';
import {Man} from 'local/src/pages/Man';
import {About} from 'local/src/pages/About';
import {Certificate} from 'local/src/pages/Certificate';
import {Delivery} from 'local/src/pages/Delivery';
import {Woman} from 'local/src/pages/Woman';
import {Shop} from 'local/src/pages/Shop';
import {Catalog} from 'local/src/pages/Catalog';
import {Product} from 'local/src/pages/Product';
import {Contacts} from 'local/src/pages/Contacts';


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Shop />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/man" element={<Man />} />
                <Route path="/woman" element={<Woman />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/contacts" element={<Contacts />} />
            </Route>
        </Routes>
    );
}
