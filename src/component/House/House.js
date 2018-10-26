import React from "react";

function House(props) {
    const { name, address, city, state, zipcode } = props.houseList;
    return (
        <div>
            Home Listings
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zipcode}</p>
            <button>Delete</button>
        </div>
    );
}

export default House;