import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";

const CountriesComponent = ({ availableCountries, handleCountryChange  }) => {
    
    return (
        <>
            <select className={"select"} title="dropdown-countries" onChange={handleCountryChange}  >
                {availableCountries.map((c) => <option key={c.id} value={c.value} >{c.name}</option>)}
            </select>
            <br />
        </>        
    );
  };

export default CountriesComponent;