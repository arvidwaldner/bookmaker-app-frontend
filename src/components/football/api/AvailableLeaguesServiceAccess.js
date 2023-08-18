import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import GetConfiguration from "./ServiceAccessConfiguration";

const GetAvailableLeaguesFromService = async function(countryName){

    var configuration = GetConfiguration("GET", "https://v3.football.api-sports.io/leagues?season=2023&type=league&country=" + countryName);

    const leagues = [];
    await axios.get(configuration.url, configuration)
        .then(function(response){
            response.data.response.forEach((item) => {
                leagues.push({
                id: item.league.id,
                code: item.country.code,    
                name: item.league.name,
                type: item.league.type,  
                logo: item.league.logo,
                value: item.league.id + "|" + item.league.name});
            });
        })
        .catch(function(error){
            console.log(error);
        });
    
    return leagues;
}

export default GetAvailableLeaguesFromService;
