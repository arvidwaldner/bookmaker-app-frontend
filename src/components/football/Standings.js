import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";


const StandingsComponent = ({ currentStandings }) => {
    console.log(currentStandings);
    return (

        <Container>
        <h2>Standings</h2>
        <Table border={"true"} hover={"true"} striped={"true"} >
            <thead>
                <tr>
                    <th colSpan={1}>#</th>
                    <th colSpan={1}>Logo</th>
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
                    <tr key={x.id}>
                        <td colSpan={1}><b>{x.rank}</b></td>
                        <td colSpan={1}>                                 
                         
                            <Figure>
                                <Figure.Image src={x.teamLogo} fluid={true}></Figure.Image>    
                            </Figure>
                        </td>
                        <td colSpan={1}><b>{x.teamName}</b></td>
                        <td colSpan={1}>{x.gamesPlayed}</td>
                        <td colSpan={1}>{x.wins}</td>
                        <td colSpan={1}>{x.draws}</td>
                        <td colSpan={1}>{x.losses}</td>
                        <td colSpan={1}>{x.goalsScored}</td>
                        <td colSpan={1}>{x.goalsConceeded}</td>
                        <td colSpan={1}>{x.goalDifference}</td>
                        <td colSpan={1}><b>{x.points}</b></td>                                
                    </tr>
                ))}
            </tbody>
        </Table>
    </Container>
    );
  };

export default StandingsComponent;