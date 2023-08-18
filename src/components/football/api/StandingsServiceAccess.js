import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import GetConfiguration from "./ServiceAccessConfiguration";


const GetStandingsFromService = async function(leagueId){

    var configuration = GetConfiguration("GET", "https://v3.football.api-sports.io/standings?league=" + leagueId +"&season=2023");
    

    const tableStandings = [];
    await axios.get(configuration.url, configuration)
        .then(function(response){
            const standingsResponse = response.data.response[0].league.standings[0];
            standingsResponse.forEach((item) => {
                tableStandings.push({
                    id: item.team.id,
                    rank: item.rank,
                    teamLogo: item.team.logo,
                    teamName: item.team.name,
                    goalDifference: item.goalsDiff,
                    gamesPlayed: item.all.played,
                    wins: item.all.win,
                    draws: item.all.draw,
                    losses: item.all.lose,
                    goalsScored: item.all.goals.for,
                    goalsConceeded: item.all.goals.against,
                    points: item.points
                });
            });
        })
        .catch(function(error){
            console.log(error);
        });
    
    return tableStandings;
}

export default GetStandingsFromService;