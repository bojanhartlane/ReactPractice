import React from 'react';

const Display = ({cities}) => (
    <ul>
        {cities.map(city =>
            <li key={city.id}>City: {city.country}</li>
        )}
    </ul>
)

export default Display;
