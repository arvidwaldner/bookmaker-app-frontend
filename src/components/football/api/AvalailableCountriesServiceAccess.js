import React from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";
import axios from "axios";
import GetConfiguration from "./ServiceAccessConfiguration";

const GetAvailableCountriesFromService = async function(){
    
    var configuration = GetConfiguration("GET", "https://v3.football.api-sports.io/countries");
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
    
    return results;
}

export default GetAvailableCountriesFromService;