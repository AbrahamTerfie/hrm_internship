import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePasswordToggle from "../../hooks/usePasseordToggle";
import PasswordStrengthIndicator from "../../Components/PasswordStrengthIndicator"



const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

const Signup = () => {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordValidity, setPasswordValidity] = useState({
        minChar: null,
        number: null,
        specialChar: null
    });

    const onChangePassword = password => {
        setPassword(password);

        setPasswordValidity({
            minChar: password.length >= 8 ? true : false,
            number: isNumberRegx.test(password) ? true : false,
            specialChar: specialCharacterRegx.test(password) ? true : false
        });
    };

    return (
        <>

            <div
                style={{
                    marginTop: "25%",
                    marginLeft: '40%'
                }}
                className="row d-flex align-items-center">
                <div className="col-lg-4 text-center">


                    <div className="card bg-light">
                        <article
                            className="card-body mx-auto"
                            style={{ maxWidth: "100%" }}
                        >
                            <h4 className="card-title mt-3 text-center">
                                Create Account
                            </h4>
                            <p className="text-center">
                                Get started with your free account
                            </p>

                            <form >
                                <div className="inputFields form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="user" />
                                        </span>
                                    </div>
                                    <input
                                        name=""
                                        className="form-control"
                                        placeholder="Full name"
                                        type="text"
                                    />
                                </div>
                                <div className=" inputFields form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="envelope" />
                                        </span>
                                    </div>
                                    <input
                                        name=""
                                        className="form-control"
                                        placeholder="Email address"
                                        type="email"
                                    />
                                </div>

                                <div className="inputFields form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon="lock" />
                                        </span>
                                    </div>
                                    <input
                                        className="form-control "
                                        placeholder="Create password"
                                        type={PasswordInputType}
                                        value={password}
                                        onFocus={() => setPasswordFocused(true)}
                                        onChange={e =>
                                            onChangePassword(e.target.value)
                                        }
                                    />
                                    <span className="password-toogle-icon">
                                        {ToggleIcon}
                                    </span>
                                </div>

                                {passwordFocused && (
                                    <PasswordStrengthIndicator
                                        validity={passwordValidity}
                                    />
                                )}

                                <div className="form-group">
                                <Link to="/home">
                                <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        {" "}
                                        Create Account{" "}
                                    </button>
                                </Link>
                                </div>
                                <p className="text-center">
                                    Have an account? <a href="">Log In</a>{" "}
                                </p>
                            </form>
                        </article>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Signup;
