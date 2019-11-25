import React, { Component } from 'react';
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import './RSVP.css';

export class RSVP extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newRSVP: {
                name: "",
                email: "",
                phone: "",
                rsvpcountadult: "",
                rsvpcountchildren: "",
                comment: ""
            }
        };
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleRSVPCount = this.handleRSVPCount.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleFullName(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newRSVP: {
                    ...prevState.newRSVP,
                    name: value
                }
            }),
            () => console.log(this.state.newRSVP)
        );
    }

    handleRSVPCount(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newRSVP: {
                    ...prevState.newRSVP,
                    age: value
                }
            }),
            () => console.log(this.state.newRSVP)
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newRSVP: {
                    ...prevState.newRSVP,
                    [name]: value
                }
            }),
            () => console.log(this.state.newRSVP)
        );
    }

    handleTextArea(e) {
        console.log("Inside handleTextArea");
        let value = e.target.value;
        this.setState(
            prevState => ({
                newRSVP: {
                    ...prevState.newRSVP,
                    about: value
                }
            }),
            () => console.log(this.state.newRSVP)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let rsvpData = this.state.newRSVP;

        fetch("http://example.com", {
            method: "POST",
            body: JSON.stringify(rsvpData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            });
        });
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newRSVP: {
                name: "",
                email: "",
                phone: "",
                rsvpcountadult: "",
                rsvpcountchildren: "",
                comment: ""
            }
        });
    }

    render() {
        return (
            <div id="canvas">
                <div id="upper-logo">
                    <h1 class="logo" data-content-field="site-title">
                        <a href="/rsvp">RSVP</a>
                    </h1>
                </div>

                <div id="topNav">
                    <nav class="main-nav" data-content-field="navigation">
                        <ul>
                            <li class="page-collection active-link">
                                <a href="/">Home</a>
                            </li>
                            <li class="page-collection">
                                <a href="/wedding">Wedding</a>
                            </li>
                            {/*<li class="page-collection">
                                <a href="/photos">Photos</a>
                            </li>*/}
                            {/*<li class="page-collection">
                                <a href="/registry">Registry</a>
                            </li>*/}
                            <li class="page-collection">
                                <a href="/rsvp">RSVP</a>
                            </li>
                        </ul>
                        <div class="page-divider"></div>
                    </nav>
                </div>

                {/*
                <div id="main-container">
                    <img id="main-image" src={require('../images/rengstorff_house.jpg')} />
                    <div class="page-divider"></div>
                </div>
                */}

                <div id="info-div">
                    <form id="rsvp-form" className="container-fluid" onSubmit={this.handleFormSubmit}>
                        <Input
                            inputType={"text"}
                            title={"Name"}
                            name={"name"}
                            value={this.state.newRSVP.name}
                            placeholder={"Please enter your name"}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Name */}
                        <Input
                            inputType={"text"}
                            title={"Email"}
                            name={"email"}
                            value={this.state.newRSVP.email}
                            placeholder={"Please enter your Email Address"}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Email */}
                        <Input
                            inputType={"text"}
                            title={"Phone"}
                            name={"phone"}
                            value={this.state.newRSVP.phone}
                            placeholder={"Please enter your Phone Number"}
                            handleChange={this.handleInput}
                        />{" "}
                        {/* Phone Number */}
                        <Input
                            inputType={"number"}
                            name={"rsvpcountadult"}
                            title={"RSVP Count - Adults"}
                            value={this.state.newRSVP.rsvpcountadult}
                            placeholder={"How many guests? (Adults)"}
                            handleChange={this.handleRSVPCount}
                        />{" "}
                        {/* RSVP Count - Adult */}
                        <Input
                            inputType={"number"}
                            name={"rsvpcountchildren"}
                            title={"RSVP Count - Children"}
                            value={this.state.newRSVP.rsvpcountchildren}
                            placeholder={"Number of Children?"}
                            handleChange={this.handleRSVPCount}
                        />{" "}
                        {/* RSVP Count - Adult */}
                        <TextArea
                            title={"Additional Notes and Comments"}
                            rows={5}
                            value={this.state.newRSVP.comment}
                            name={"guestComment"}
                            handleChange={this.handleTextArea}
                            placeholder={"Any additional notes and/or comments?"}
                        />
                        {/* Comment */}
                        <Button
                            action={this.handleFormSubmit}
                            type={"primary"}
                            title={"Submit"}
                            style={buttonStyle}
                        />{" "}
                        {/*Submit */}
                        <Button
                            action={this.handleClearForm}
                            type={"secondary"}
                            title={"Clear"}
                            style={buttonStyle}
                        />{" "}
                        {/* Clear the form */}
                    </form>
                </div>

            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};
