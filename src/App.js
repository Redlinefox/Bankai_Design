import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Project1 from './components/pages/Project1';
import Project2 from './components/pages/Project2';
import Project3 from './components/pages/Project3';
import Project4 from './components/pages/Project4';
// import Project5 from './components/pages/Project5';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
    return (
        <>
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/projects'>
                <Projects/>
            </Route>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/bankai-design-creation' component={Project1} />
            <Route path='/trvl-website-development' component={Project2} />
            <Route path='/chear-case-study' component={Project3} />
            <Route path='/unwrapped-project' component={Project4} />
            {/* <Route path='/zohr-crm-design' component={Project5} /> */}
            </Switch>
            <Footer />
        </Router>
        </>
    );
}

export default App;
