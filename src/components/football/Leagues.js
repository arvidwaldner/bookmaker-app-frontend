import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons";

const LeaguesComponent = ({ availableLeagues, handleLeagueChange  }) => {
    
    return (
        <>
            
            <Card bg="secondary" border="light">
                <Card.Header>
                    <h5>2. ⬇️ Select a league ⬇️ <FontAwesomeIcon icon={faTableList} fade/></h5>
                </Card.Header>
                <Card.Body>
                    <select title="dropdown-leagues" onChange={handleLeagueChange} >
                        {availableLeagues.map((c) => <option key={c.id} value={c.value} >{c.name}</option>)}
                    </select>
                    <br />                            
                </Card.Body>
            </Card>          
            
            
        </>        
    );
  };

export default LeaguesComponent;