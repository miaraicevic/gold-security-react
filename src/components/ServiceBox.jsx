import React from 'react';

const ServiceBox = ({ title, description }) => {
    return (
        <div class="py-8 px-4 mx-4 rounded my-4 text-white sm:max-w-lg sm:mx-auto lg:max-w-sm lg:mx-2" style={{ backgroundColor: 'rgb(37, 34, 34)' }}>
            <h2 class="text-2xl pb-5 font-semibold">{title}</h2>
            <p class="mt-2 text-xl">{description}</p>
        </div>
    );
};

export default ServiceBox;
