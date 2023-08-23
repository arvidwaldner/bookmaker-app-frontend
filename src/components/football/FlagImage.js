import { React, useEffect, useState, ReactDOM, } from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";

const FlagImageComponent = ({countryFlag, countryName}) => {

    
    return(
        <>
            <Figure>
                    <Figure.Image title="flag-img" src={countryFlag} width={70} height={80} alt="70x80" />
                    <Figure.Caption>{countryName}</Figure.Caption>                    
            </Figure>
        </>
    );
}

export default FlagImageComponent;