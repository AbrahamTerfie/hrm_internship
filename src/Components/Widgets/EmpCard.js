import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Logo from "../../logo.svg";
import "./EmpCard.css";

const EmpCard = ({ icon, cardNmae, number }) => {
  return (
    <div className="empCard">
      <Card>
        <CardImg
          top
          width="20%"
          height="100em"
          src={icon}
          alt="Card image cap"
        />
        <CardBody style={{ alignSelf: "center" }}>
          <CardTitle className="text-muted" tag="h1"> {number} </CardTitle>{" "}
          <CardSubtitle tag="h3" className="mb-2 ">

            {cardNmae}
          </CardSubtitle>

        </CardBody>{" "}
      </Card>{" "}
    </div>
  );
};

export default EmpCard;
