import React, { useState } from 'react';
import styled from 'styled-components';
import './Number.css';

const Numbers = () => {
    const [count, setCount] = useState(0)

    function handleCount() {
        setCount(count)
    }
    return <div>
        <Counter>
            <div className='numbers'>
                <div className='content1'>
                    <button className='integer' value={count} onClick={handleCount}>7</button>
                    <button className='integers'>8</button>
                    <button className='integer2'>9</button>
                </div>
                <div className='content2'>
                    <button className='integer'>4</button>
                    <button className='integers'>5</button>
                    <button className='integer2'>6</button>
                </div>
                <div className='content3'>
                    <button className='integer'>1</button>
                    <button className='integer'>2</button>
                    <button className='integer'>3</button>
                </div>
            </div>
        </Counter>
    </div>;
};

const Counter = styled.div`
length: 4vh;
width: 18.2rem;
`
export default Numbers;
