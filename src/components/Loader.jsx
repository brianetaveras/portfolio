import React from 'react';
import styled from 'styled-components'

const LoaderBox = styled.div`
background: rgba(0,0,0,0.2);
position: fixed;
height: 100vh;
width: 100%;
`

const LoaderCircle = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 16px solid #cdcdcd;
border-top: 16px solid #00A295;
border-radius: 50%;
width: 50px;
height: 50px;
animation: loader 1.5s linear infinite;

`

export default function Loader(){

    return(

        <LoaderBox>
            <LoaderCircle/>
        </LoaderBox>
        
    )
}