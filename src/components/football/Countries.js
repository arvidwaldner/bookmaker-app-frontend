import { React, useEffect, useState, ReactDOM, } from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import LoadingIconComponent from "../helpers/LoadingIcon";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import FlagImageComponent from "./FlagImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlagUsa } from "@fortawesome/free-solid-svg-icons";



const CountriesComponent = ({isLoading, countrySelected, availableCountries, handleCountryChange, countryFlag, countryName  }) => {
    
    return (
        <>
            <Card bg="secondary" border="light">
                <Card.Header>
                    <h5>1. ⬇️ Select a country ⬇️ <FontAwesomeIcon icon={faFlagUsa} fade/></h5>
                </Card.Header>                                
                <Card.Body>
                    <Row>
                        <Col sm={3}>
                        
                        </Col>
                        <Col sm={6}>
                            {isLoading ? (<LoadingIconComponent type={"cubes"} color={"#fff"} />) : 
                            (
                                <select title="dropdown-countries" onChange={handleCountryChange}  >
                                    {availableCountries.map((c) => <option key={c.id} value={c.value} >{c.name}</option>)}
                                </select>)
                            }        
                        </Col>
                        
                        <Col sm={4}>
                        
                        </Col>
                    </Row>
                    <br /> 
                    <Row>
                        <Col sm={12}>
                            {countrySelected ? (<FlagImageComponent countryFlag={countryFlag} countryName={countryName} />) : (<Placeholder xs={3} animation="glow"></Placeholder>)}
                        </Col>    
                    </Row>                                           
                </Card.Body>
            </Card>
            <br />
        </>        
    );
  };

export default CountriesComponent;