import React from 'react';

const Image = ({ src, alt}) => {
    return (
        <div style={{ margin: '10px'}}>
            <img src={src} alt={alt} style={{ width: '600px', height: '400px' }} />
        </div>
    );
};

export default Image;
