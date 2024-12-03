import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { Link } from 'react-router-dom';

function Task1Page() {
    return (
        <div>
            <Header />
            <Content />
            <div style={{textAlign: 'center'}}>
                <Link to="/">
                    <button style={{ margin: '20px', padding: '10px 20px' }}>
                        Перейти на головну сторінку
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Task1Page;
