import { React, useEffect, useState, ReactDOM, } from "react";
import {Container, Table, Image, Row, Col, Figure, Placeholder, Card, Spinner } from "react-bootstrap";

function ProgressSpinnerComponent(){
    return(
        <>
            <Spinner animation="border" role="status" size="lg">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </>        
    );


}

export default ProgressSpinnerComponent;