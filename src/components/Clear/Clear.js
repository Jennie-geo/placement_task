import React, { Fragment } from 'react';
import styled from 'styled-components';
import MathSymbols
    from '../MathSymbols/MathSymbols';
import Numbers from '../Numbers/Numbers';

const Clear = () => {
    return <div className='center'>
        <Calculate style={{}}>
            <div >
                <Nav>
                    <button style={{ width: '292px', cursor: 'pointer' }}><p>clear</p></button>
                </Nav>
                <div>
                    <Numbers />
                </div>
            </div>
            <div>
                <MathSymbols />
            </div>

        </Calculate>

    </div>;
};

const Nav = styled.p`
color: white;
font-size: 24px;
margin: 0px;
cursor: pointer;

 
`
const Calculate = styled.div`
display: flex;
justify-content: space-between;
background-color: pink;


`
export default Clear;
