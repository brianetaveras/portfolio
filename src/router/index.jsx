import React from 'react';
import {Route} from 'react-router-dom';

// Import Views
import Home from '../views/Home'
import Project from '../views/Project'

export default function Routes(){
    return(
        <div className="routes">
            <Route exact path="/" render={props=>{
                return <Home {...props} />
            }}/>
            <Route exact path="/project/:id" component={Project}/>
        </div>
    )
}