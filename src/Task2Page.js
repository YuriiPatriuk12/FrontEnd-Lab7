import React from 'react';
import GoodsCard from './GoodsCard';
import { Link } from 'react-router-dom';

const goods = [
    { id: 1, name: 'Ноутбук', price: '30 000 грн', img: 'images/laptop.jpg' },
    { id: 2, name: 'Смартфон', price: '15 000 грн', img: 'images/phone.jpg' },
    { id: 3, name: 'Навушники', price: '3 500 грн', img: 'images/headphones.jpg' },
    { id: 4, name: 'Монітор', price: '12 000 грн', img: 'images/monitor.jpg' },
    { id: 5, name: 'Мишка', price: '800 грн', img: 'images/mouse.jpg' },
    { id: 6, name: 'Клавіатура', price: '1 500 грн', img: 'images/keyboard.jpg' },
];

function Task2Page() {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                }}
            >
                {goods.map((item) => (
                    <GoodsCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                    />
                ))}
            </div>
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

export default Task2Page;
