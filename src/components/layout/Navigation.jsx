import React from 'react';
import {Navbar, Container} from '../StyledComponents';



export default function Navigation(){
    return (
        <div className="navigation">
            <Navbar>
                <Container>
                    <div className="content">
                        <div className="logo">BRIAN TAVERAS</div>
                        <nav className="links">
                            <a title="Github link" href="https://github.com/brianetaveras/"><i className="fa fa-github-square"></i></a>
                            <a title="Linked link" href="https://www.linkedin.com/in/brianetaveras/"><i className="fa fa-linkedin-square"></i></a>
                            <a title="Email link" href="mailto:taveras574@gmail.com"><i className="fa fa-at"></i></a>
                        </nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    ) 
}