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

const Wrapper = styled.div`
    background: ${({ theme }) => theme.backgroundGradient};
    background-attachment: fixed;
    background-position: center;
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
