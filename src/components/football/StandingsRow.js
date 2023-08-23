import React, {Suspense} from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import TeamLogoImageComponent from "./TeamLogoImage";

function StandingsRowComponent({standing}){
    return(
        <>
            <tr key={standing.id}>
                <td colSpan={1}><b>{standing.rank}</b></td>
                <td colSpan={1}>                               
                    {
                        <Suspense>
                            <TeamLogoImageComponent teamLogoSrc={standing.teamLogo} />     
                        </Suspense>                   
                    
                    }
                </td>
                <td colSpan={1}><b>{standing.teamName}</b></td>
                <td colSpan={1}>{standing.gamesPlayed}</td>
                <td colSpan={1}>{standing.wins}</td>
                <td colSpan={1}>{standing.draws}</td>
                <td colSpan={1}>{standing.losses}</td>
                <td colSpan={1}>{standing.goalsScored}</td>
                <td colSpan={1}>{standing.goalsConceeded}</td>
                <td colSpan={1}>{standing.goalDifference}</td>
                <td colSpan={1}><b>{standing.points}</b></td>                                                                    
            </tr>
        </>
    );
}

export default StandingsRowComponent;