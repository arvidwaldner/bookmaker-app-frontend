import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";

const LeaguesComponent = ({ availableLeagues, handleLeagueChange  }) => {
    
    return (
        <>
            <p>⬇️2. Select a league ⬇️</p>
            <select title="dropdown-leagues" onChange={handleLeagueChange} >
                {availableLeagues.map((c) => <option key={c.id} value={c.id} >{c.name}</option>)}
            </select>
            <br />
        </>        
    );
  };

export default LeaguesComponent;