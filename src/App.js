import {Route, Routes, useLocation} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/About/AboutPage'
import LogPage from './pages/LogPage'
import ContactPage from './pages/ContactPage'
import JoinPage from './pages/JoinPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'
import GlobalStyles from './GlobalStyles'
import {isMobile} from 'react-device-detect'
import MobileMain from './pages/Mobile/MobileMain'
import MobileArchive from './pages/Mobile/MobileArchive'
import MobileJoin from './pages/Mobile/MoblieJoin'
import MobileContact from './pages/Mobile/MobileContact'

function App() {
    const location = useLocation()
    return (
        <>
            <GlobalStyles />
            <Header />
            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames="fade" timeout={800}>
                    {isMobile ? (
                        <Routes location={location}>
                            <Route exact path="/" element={<MobileMain style={{position: 'absolute'}} />} />
                            <Route exact path="/home" element={<MobileMain style={{position: 'absolute'}} />} />
                            <Route exact path="/about" element={<AboutPage style={{position: 'absolute'}} />} />
                            <Route exact path="/archive" element={<MobileArchive style={{position: 'absolute'}} />} />
                            <Route exact path="/contact" element={<MobileContact style={{position: 'absolute'}} />} />
                            <Route exact path="/join" element={<MobileJoin style={{position: 'absolute'}} />} />
                            <Route path="*" element={<NotFoundPage />}></Route>
                        </Routes>
                    ) : (
                        <Routes location={location}>
                            <Route exact path="/" element={<HomePage style={{position: 'absolute'}} />} />
                            <Route exact path="/home" element={<HomePage style={{position: 'absolute'}} />} />
                            <Route exact path="/about" element={<AboutPage style={{position: 'absolute'}} />} />
                            <Route exact path="/log" element={<LogPage style={{position: 'absolute'}} />} />
                            <Route exact path="/contact" element={<ContactPage style={{position: 'absolute'}} />} />
                            <Route exact path="/join" element={<JoinPage style={{position: 'absolute'}} />} />
                            <Route path="*" element={<NotFoundPage />}></Route>
                        </Routes>
                    )}
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}

export default App
