import React from 'react';

import Banner from '../Banner/Banner';
import Layout from '../Layout/Layout';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';

import './App.scss';

const App = () => (
    <React.Fragment>
        <Banner />
        <Layout>
            <Navigation />
            <Main />
            <Events />
        </Layout>
        <Footer />
    </React.Fragment>
);

export default App;
