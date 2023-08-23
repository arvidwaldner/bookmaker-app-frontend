
import { React, useEffect, useState, ReactDOM, } from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol, faPersonRunning, faChartSimple } from "@fortawesome/free-solid-svg-icons";

function StatisticsHeaderComponent(){
    return(
        <>
            <Card bg="secondary" border="light">
                <Card.Body>
                    <h3>Football statistics - Season 2023 <FontAwesomeIcon icon={faChartSimple} fade/></h3>                         
                        
                    
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default StatisticsHeaderComponent;