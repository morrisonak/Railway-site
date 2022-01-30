import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import LandingPage from './pages/landing';
import ResumePage from './pages/resume';
import themes from './themes';

const Background = styled.div`
    background: ${({ theme }) => theme.backgroundGradient};
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: -1;
`;

const Wrapper = styled.div`
    color: ${({ theme }) => theme.color};
    display: flex;
    flex-direction: column;
    font-family: Lato, Helvetica, Arial;
    justify-content: space-between;
    min-height: 100vh;
`;

const Site = () => {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeProvider theme={themes[theme]}>
            <Background />
            <Wrapper>
                <Router>
                    <NavBar
                        setTheme={setTheme}
                        theme={theme}
                    />
                    <Switch>
                        <Route path='/' exact>
                            <LandingPage />
                        </Route>
                        <Route path='/about'>
                            <AboutPage />
                        </Route>
                        <Route path='/contact'>
                            <ContactPage />
                        </Route>
                        <Route path='/resume'>
                            <ResumePage />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
};

ReactDOM.render(<Site />, document.getElementById('main'));
