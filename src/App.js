import React from 'react';
import Header from './Header';
import GameSection from './GameSection';
import Footer from './Footer';
import { Container } from '@mui/material';

function App() {
    return (
        <Container>
            <Header />
            <GameSection />
            <Footer />
        </Container>
    );
}

export default App;
