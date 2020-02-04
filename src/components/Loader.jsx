import React from 'react';
import styled from 'styled-components'


const LoaderCircle = styled.div`
margin: 20% auto;
border: 16px solid #cdcdcd;
border-top: 16px solid #00A295;
border-radius: 50%;
width: 50px;
height: 50px;
animation: loader 1.5s linear infinite;
transition: 1s;

`

const LoaderOverlay = styled.div`
position: absolute;
height: 100vh;
width: 100%;
background: #01B7A8;
transition: 1s;
`

export default function Loader(){

    return(
            <LoaderOverlay>
                <LoaderCircle/>

            </LoaderOverlay>
        
    )
}