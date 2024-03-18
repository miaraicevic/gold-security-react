import React from 'react';

const InfoBox = ({ imageUrl, text }) => {
    return (
        <div class=" text-white flex flex-col items-center m-3 p-4 rounded justify-center sm:w-40 md:w-60" style={{ backgroundColor: 'rgb(37, 34, 34)' }}>
            <img src={imageUrl} alt="info" class="mb-2 w-auto" />
            <p class="text-center">{text}</p>
        </div>
    );
};

export default InfoBox;
