import { React, useEffect, useState, ReactDOM, } from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import LoadingIconComponent from "../helpers/LoadingIcon";
import 'animate.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import StandingsComponent from "./Standings";
import LeaguesComponent from "./Leagues";
import CountriesComponent from "./Countries";
import FlagImageComponent from "./FlagImage";
import GetAvailableCountriesFromService from "./api/AvalailableCountriesServiceAccess";
import GetAvailableLeaguesFromService from "./api/AvailableLeaguesServiceAccess";
import GetStandingsFromService from "./api/StandingsServiceAccess";
import StatisticsHeaderComponent from "./StatisticsHeader";



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
    let [selectedLeagueName, setSelectedLeagueName] = useState("");
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
        
        const valueSelected = e.target.value.split('|');
        const selectedLeagueName = e.target.options[e.target.selectedIndex].text;
        const selectedLeagueId = valueSelected[0];
                      
        setIsLoading(true);
        setLeagueId(selectedLeagueId);
        setSelectedLeagueName(selectedLeagueName);        
        setLeagueSelected(true);
        getLeagueStandings(selectedLeagueId);
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
    
    const renderHeaderComponent = (

        <AnimationOnScroll animateIn='animate__slideInDown' animatePreScroll={true} duration={1}> 
            <StatisticsHeaderComponent />
        </AnimationOnScroll>
    );

    const renderCountriesComponent = (
        <AnimationOnScroll animateIn='animate__zoomIn' animatePreScroll={true} duration={1}>
            <CountriesComponent 
                isLoading={isLoading} 
                countrySelected={countrySelected} 
                availableCountries={availableCountries} 
                handleCountryChange={handleCountryChange} 
                countryFlag={countryFlag} 
                countryName={countryName}>
            </CountriesComponent>
        </AnimationOnScroll>
    );

    const renderLeaguesComponent = (
        <AnimationOnScroll animateIn='animate__fadeInLeft' animatePreScroll={true} duration={1}>
            <LeaguesComponent availableLeagues={availableLeagues} handleLeagueChange={handleLeagueChange} />                                             
        </AnimationOnScroll>
    );

    const renderStandingsComponent = (
        <AnimationOnScroll animateIn="animate__zoomIn">
            <StandingsComponent currentStandings={currentStandings} selectedLeague={selectedLeagueName} />   
        </AnimationOnScroll>        
    );

    return(
        <>
            <Container>
                {renderHeaderComponent}                  
                <br />
                <Container>
                    <Row>
                        <Col>
                            {renderCountriesComponent}                                                  
                        </Col>                        
                    </Row>
                    <Row>
                        <Col>
                            {countrySelected ? (renderLeaguesComponent) : (<p></p>)}                        
                                
                               
                                                       
                        </Col>                                                                   
                    </Row>
                    <br />                                                                                                        
                </Container>
                <br />
            </Container>
            <Container>
                {leagueSelected ? (renderStandingsComponent) : (<p></p>)}
                <br />
            </Container>
        </>
    );
}

export default StatisticsComponent;