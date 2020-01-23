import React from 'react';
import {Route} from 'react-router-dom';

// Import Views
import Home from '../views/Home'

export default function Routes(){
    return(
        <div className="routes">
            <Route exact path="/" component={Home}/>
        </div>
    )
}