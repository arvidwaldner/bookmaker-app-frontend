import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import StandingsRowComponent from "./StandingsRow";


const StandingsComponent = ({ currentStandings, selectedLeague }) => {
    
    return (

        <Container>
            <Card bg="secondary" border="light">
                <Card.Header>
                    <h2>Standings {selectedLeague}</h2>
                </Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th colSpan={1}>#</th>
                                <th colSpan={1}></th>
                                <th colSpan={1}>Team</th>
                                <th colSpan={1}>Games played</th>
                                <th colSpan={1}>Wins</th>
                                <th colSpan={1}>Draws</th>
                                <th colSpan={1}>Losses</th>
                                <th colSpan={1}>Goals scored</th>
                                <th colSpan={1}>Goals conceeded</th>
                                <th colSpan={1}>+/-</th>
                                <th colSpan={1}>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentStandings.map(x =>(                               
                                <StandingsRowComponent standing={x} />                          
                             
                              
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>           
            
    </Container>
    );
  };

export default StandingsComponent;