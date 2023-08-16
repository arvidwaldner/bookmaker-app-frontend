import { React, useEffect, useState, ReactDOM, Card } from "react";
import {Container, Table, Image, Row, Col, Figure } from "react-bootstrap";
import LoadingIconComponent from "../helpers/LoadingIcon";
import axios from "axios";
import 'animate.css';
import CardHeader from "react-bootstrap/esm/CardHeader";


function StatisticsComponent(){

    const RAPIDAPIKEY_FOOTBALL = "API KEY GOES HERE";

    let [countryName, setCountryName] = useState("⬇️ Select a country ⬇️");
    let [countryFlag, setCountryFlag] = useState("");
    let [availableCountries, setAvailableCountries] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [countrySelected, setCountrySelected] = useState(false);
    let [availableLeagues, setAvailableLeagues] = useState([]);
    let [currentStandings, setCurrentStandings] = useState([]);
    let [leagueSelected, setLeagueSelected] = useState(false);
    let [leagueId, setLeagueId] = useState("0");

    let handleCountryChange = (e) => {
        setIsLoading(true);
        const selectedValues = e.target.value.split('|');
        const selectedCountryName = selectedValues[0];
        const selectedCountryFlag = selectedValues[1];
        const selectedCountryCode = selectedValues[2];

        setCountryName(selectedCountryName);
        setCountryFlag(selectedCountryFlag);
        setLeagueSelected(false);

        setCountrySelected(true);
        getAvailableLeagues(selectedCountryName);
               
               
        setIsLoading(false);        
      };

      useEffect(() => {
        setIsLoading(true);
        getAvailableCountries();        
        setIsLoading(false);               
    }, []);

    let handleLeagueChange = (e) => {
        
        const valueSelected = e.target.value;        
        setIsLoading(true);
        setLeagueId(valueSelected);        
        setLeagueSelected(true);
        getLeagueStandings(valueSelected);
        setIsLoading(false);
    };

    async function getAvailableCountries (){

        var configuration = {
            method: "GET",
            url: "https://v3.football.api-sports.io/countries",
            headers : {
                "x-rapidapi-key": RAPIDAPIKEY_FOOTBALL,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        }

        const results = [];
        await axios.get(configuration.url, configuration)
            .then(function(response){
                response.data.response.forEach((item) => {
                    results.push({
                    id: item.code + '_' + item.name,    
                    name: item.name,
                    code: item.code,  
                    flag: item.flag,
                    value: item.name + "|" + item.flag + "|" + item.code
                    });
                });
            })
            .catch(function(error){
                console.log(error);
            });      
            
        
        // Update the options state
        setAvailableCountries([{name: '⬇️ Select a country ⬇️', code: '', flag: '', id: 0}, ...results]);                
    }

    async function getAvailableLeagues(countryName){
        
        var configuration = {
            method: "GET",
            url: "https://v3.football.api-sports.io/leagues?season=2023&type=league&country=" + countryName,
            headers : {
                "x-rapidapi-key": RAPIDAPIKEY_FOOTBALL,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        }

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
            
        // Update the options state
        setAvailableLeagues([{name: '⬇️ Select a league ⬇️', code: '', logo: '', id: 0, type: ''}, ...leagues]);    
           
        
        
    }

    async function getLeagueStandings(leagueId){
                
        var configuration = {
            method: "GET",
            url: "https://v3.football.api-sports.io/standings?league=" + leagueId +"&season=2023",
            headers : {
                "x-rapidapi-key": RAPIDAPIKEY_FOOTBALL,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        }

        const tableStandings = [];
        await axios.get(configuration.url, configuration)
            .then(function(response){
                const standingsResponse = response.data.response[0].league.standings[0];
                standingsResponse.forEach((item) => {
                    tableStandings.push({
                        id: item.team.id,
                        rank: item.rank,
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

        //Update the current standings of selected league
        setCurrentStandings([...tableStandings]);
    }

    const renderFlag = (
        <>
            <p>
                <Figure>
                    <Figure.Image title="flag-img" src={countryFlag} width={70} height={80} alt="70x80" fluid={"true"} />
                    <Figure.Caption>{countryName}</Figure.Caption>                    
                </Figure>                
            </p>
        </>        
    );

    const renderLeaguesDropDown = (
        <>
            <p>⬇️ Select a league ⬇️</p>
            <select title="dropdown-leagues" onChange={handleLeagueChange} >
                {availableLeagues.map((c) => <option key={c.id} value={c.id} >{c.name}</option>)}
            </select>  
                    
        </>
    );

    const renderCountriesDropDown = (
        <>
            <select title="dropdown-countries" onChange={handleCountryChange} disabled={isLoading}>
                {availableCountries.map((c) => <option key={c.id} value={c.value} >{c.name}</option>)}
            </select>
        </>
    );

    const renderStandings = (
        <>
            <Container>
                <h2>Standings</h2>
                <Table border={"true"} hover={"true"} striped={"true"}>
                    <thead>
                        <tr>
                            <th colSpan={1}>#</th>
                            <th colSpan={1}>Team</th>
                            <th colSpan={1}>Games played</th>
                            <th colSpan={1}>Wins</th>
                            <th colSpan={1}>Draws</th>
                            <th colSpan={1}>Losses</th>
                            <th colSpan={1}>Goals scored</th>
                            <th colSpan={1}>Goals conceeded</th>
                            <th colSpan={1}>Goal difference</th>
                            <th colSpan={1}>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentStandings.map(x =>(
                            <tr key={x.id}>
                                <td colSpan={1}>{x.rank}</td>
                                <td colSpan={1}>{x.teamName}</td>
                                <td colSpan={1}>{x.gamesPlayed}</td>
                                <td colSpan={1}>{x.wins}</td>
                                <td colSpan={1}>{x.draws}</td>
                                <td colSpan={1}>{x.losses}</td>
                                <td colSpan={1}>{x.goalsScored}</td>
                                <td colSpan={1}>{x.goalsConceeded}</td>
                                <td colSpan={1}>{x.goalDifference}</td>
                                <td colSpan={1}>{x.points}</td>                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );

    const renderInfoGuide = (
        <p>Choose a country first in order to get it's leagues</p>        
    );

    const renderLoadingIcon = (
        <LoadingIconComponent type={"cubes"} color={"#fff"} />
    );

    return(
        <>
            <Container>
                <h3>Football Statistics - Check current league standings in different countries</h3>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        {countrySelected ? (renderFlag) : (<p>1. ⬇️ Select a country ⬇️</p>)}
                    </Col>                    
                </Row>
                <Row>
                    <Col sm={6}>
                        {isLoading ? (renderLoadingIcon) : renderCountriesDropDown}                        
                    </Col>
                    <Col sm={6}>
                        {countrySelected ? (renderLeaguesDropDown) : (renderInfoGuide)}    
                    </Col>                
                </Row>                                                                
            </Container>
            <Container>
                {leagueSelected ? (renderStandings) : (<p></p>)}
            </Container>
        </>
    );
}

export default StatisticsComponent;