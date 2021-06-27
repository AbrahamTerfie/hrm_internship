import React from "react";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "../../actions/layout";
import {Button} from 'reactstrap'
const Header = ({ title = "Page Title" }) => {
    const dispatch = useDispatch();

    const toogleNavbar = () => {
        return dispatch(toggleNavbar());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid pr-5">
                <Button
                color="danger"
                size="lg"
                    type="button"
                    id="sidebarCollapse"
                    className="btn btn-info"
                    onClick={toogleNavbar}
                >
                    <i className="fas fa-align-justify"></i>
                </Button>
                <h3>{title}</h3>
            </div>
        </nav>
    );
};

export default Header;
