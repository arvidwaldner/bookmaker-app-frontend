import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import axios from "axios";


const RAPIDAPI_KEY_FOOTBALL = "API_KEY";
const RAPIDAPI_HOST_FOOTBALL = "v3.football.api-sports.io";

const GetConfiguration = function(method, url){

    var configuration = {
        method: method,
        url: url,
        headers : {
            "x-rapidapi-key": RAPIDAPI_KEY_FOOTBALL,
            "x-rapidapi-host": RAPIDAPI_HOST_FOOTBALL
        }
    }

    return configuration;
}

export default GetConfiguration;