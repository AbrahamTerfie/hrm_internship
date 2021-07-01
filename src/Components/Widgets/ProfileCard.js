import React from 'react'
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'
import './EmpCard.css'

export default function ProfileCard({ empName, startedDate, currentPositon }) {
    return (
        <div className="empCard">
            <Col>
                <CardImg top width="30%" height="30%" src="https://img.favpng.com/20/11/12/computer-icons-user-profile-png-favpng-0UAKKCpRRsMj5NaiELzw1pV7L.jpg" alt="Card image cap" />

            </Col>

            <Col>

                <CardBody>
                    <CardTitle tag="h5"> {empName} </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Started on : {startedDate} </CardSubtitle>
                    <CardText>Current Positoin : {currentPositon} </CardText>

                </CardBody>
            </Col>

        </div>
    )
}
