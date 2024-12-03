import React from 'react';

function GoodsCard({ name, price, img }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '10px',
                textAlign: 'center',
                width: '200px',
            }}
        >
            <img
                src={img}
                alt={name}
                style={{ width: '100%', height: '150px', objectFit: 'scale-down' }}
            />
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    );
}

export default GoodsCard;
