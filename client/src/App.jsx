import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/HomeNew';
import SignIn from './pages/SignInNew';
import About from './pages/AboutNew';
import Profile from './pages/ProfileNew';
import SignUp from './pages/SignUpNew';

export default function App(){ 
    return <BrowserRouter>
    <Routes>
        <Route Path='/' element={<Home/>}/>
        <Route Path='/sign-in' element={<SignIn/>}/>
        <Route Path='/sign-up' element={<SignUp/>}/>
        <Route Path='/about' element={<About/>}/>
        <Route Path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
}

