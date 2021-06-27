import React from "react";
import { Row } from "reactstrap";
import Breadcrumbs from "../Components/Breadcrumbs/BreadCrumbs";
import Header from "../Components/Header";
import Logo from "../logo.svg";
import EmpCard from "../Components/Widgets/EmpCard";
import "../Components/Widgets/EmpCard.css";
import MenuCards from "../Components/Widgets/MenuCards";

const empdatas = [
  {
    icon: <Logo />,
    cardNmae: "All Employees ",
    number: "250",
  },
  {
    icon: <Logo />,
    cardNmae: "Tasks ",
    number: "69",
  },
  {
    icon: <Logo />,
    cardNmae: "Clients ",
    number: "190",
  },
  {
    icon: <Logo />,
    cardNmae: "Projects ",
    number: "23",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Row
        style={{
          padding: "4em",
          justifyContent: "space-evenly",
        }}
      >
        {empdatas.map((data, index) => {
          return (
            <EmpCard
              icon={data.icon}
              cardNmae={data.cardNmae}
              number={data.number}
            />
          );
        })}
      </Row>
      <Row>
        <MenuCards />
      </Row>
    </div>
  );
}
