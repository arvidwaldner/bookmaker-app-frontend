import { React, useEffect, useState, ReactDOM, } from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import LoadingIconComponent from "../helpers/LoadingIcon";
import axios from "axios";
import 'animate.css';
import Select from 'react-select';
import StandingsComponent from "./Standings";
import LeaguesComponent from "./Leagues";
import CountriesComponent from "./Countries";
import FlagImageComponent from "./FlagImage";
import GetAvailableCountriesFromService from "./api/AvalailableCountriesServiceAccess";
import GetAvailableLeaguesFromService from "./api/AvailableLeaguesServiceAccess";
import GetStandingsFromService from "./api/StandingsServiceAccess";



function StatisticsComponent(){

    let [countryName, setCountryName] = useState("⬇️ Select a country ⬇️");
    let [countryFlag, setCountryFlag] = useState("");
    let [availableCountries, setAvailableCountries] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [countrySelected, setCountrySelected] = useState(false);
    let [availableLeagues, setAvailableLeagues] = useState([]);
    let [currentStandings, setCurrentStandings] = useState([]);
    let [leagueSelected, setLeagueSelected] = useState(false);
    let [leagueId, setLeagueId] = useState("0");
    let [imageIsLoading, setImageIsLoading] = useState(true);

    let handleCountryChange = (e) => {
        setImageIsLoading(true);
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
        const results = await GetAvailableCountriesFromService();        
        // Update the options state
        setAvailableCountries([{name: '⬇️ Select a country ⬇️', code: '', flag: '', id: 0}, ...results]);                
    }

    async function getAvailableLeagues(countryName){
        
        const leagues = await GetAvailableLeaguesFromService(countryName);     
           
        // Update the options state
        setAvailableLeagues([{name: '⬇️ Select a league ⬇️', code: '', logo: '', id: 0, type: ''}, ...leagues]);     
        
        
    }

    async function getLeagueStandings(leagueId){
               
        const tableStandings = await GetStandingsFromService(leagueId);    

        //Update the current standings of selected league
        setCurrentStandings([...tableStandings]);
    }

     

    return(
        <>
            <Container>
                <h3>Football Statistics - Check current league standings in different countries</h3>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        {countrySelected ? (<FlagImageComponent countryFlag={countryFlag} countryName={countryName} />) : (<p>1. ⬇️ Select a country ⬇️</p>)}
                    </Col>                    
                </Row>
                <Row>
                    <Col sm={6}>
                        {isLoading ? (<LoadingIconComponent type={"cubes"} color={"#fff"} />) : (<CountriesComponent availableCountries={availableCountries} handleCountryChange={handleCountryChange} />)}                        
                    </Col>
                    <Col sm={6}>
                        {countrySelected ? (<LeaguesComponent availableLeagues={availableLeagues} handleLeagueChange={handleLeagueChange} />) : (<Placeholder sm={6} size="sm" />)}    
                    </Col>                
                </Row>                                                                
            </Container>
            <Container>
                {leagueSelected ? (<StandingsComponent currentStandings={currentStandings} />) : (<Placeholder sm={6} size="sm" />)}
            </Container>
        </>
    );
}

export default StatisticsComponent;