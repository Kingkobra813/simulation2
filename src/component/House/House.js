import React from "react";

function House(props) {
    const { name, address, city, state, zip, id } = props.houseList;
    console.log(props)
    return (
        <div>
            Home Listings
            <h2>{name}</h2>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
            <button onClick={() => { props.deleteHome(id) }}>Delete</button>
        </div>
    );
}

export default House;