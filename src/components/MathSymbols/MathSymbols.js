import React from 'react';
import styled from 'styled-components';
import './MathSymbols.css';

const MathSymbols = () => {
    return <div>
        <div>
            <Navigation>
                <div className='symbol'>%</div>
                <div className='symbol'>-</div>
                <div className='symbol'>+</div>
                <div className='symbol'>=</div>
            </Navigation>
        </div>
    </div>;
};

const Navigation = styled.div`

`
export default MathSymbols;
