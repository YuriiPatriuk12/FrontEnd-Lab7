import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Головна сторінка</h1>
            <div>
                <Link to="/task1">
                    <button style={{ margin: '20px', padding: '10px 20px' }}>
                        Перейти до завдання 1
                    </button>
                </Link>
                <Link to="/task2">
                    <button style={{ margin: '20px', padding: '10px 20px' }}>
                        Перейти до завдання 2
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
