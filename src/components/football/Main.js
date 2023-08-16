import { React, useEffect, useState, ReactDOM, Card } from "react";
import {Container, Table, Image, Row, Col} from "react-bootstrap";
import LoadingIconComponent from "../helpers/LoadingIcon";
import axios from "axios";
import 'animate.css';
import StatisticsComponent from "./Statistics";

function MainComponent(){

    return(

        <>
            <Container>
                <StatisticsComponent />             
                 
            </Container>
            
        </>
    );
}

export default MainComponent;