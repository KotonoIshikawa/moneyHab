import React from 'react';
import { AuthProvider } from "./auth/AuthProvider";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { PrivateRoute } from './auth/PrivateRoute';
import Main from './components/Main';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Detail from './components/detail/Detail';

const App = () => {
    return(
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path = "/" component = {Main} />
                    <Route exact path = "/detail" component = {Detail} />
                    
                    <Route exact path = "/login" component = {Login} />
                    <Route exact path = "/signup" component = {SignUp} />
                    
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
};
export default App;
///:add/:Delete/:inputCategory/:setInputCategory/:inputAmount/:setInputAmount/:type/:setType/:IncItems/:setIncItems/:ExpItems/:setExpItems/:selectD/:selectM/:selectY