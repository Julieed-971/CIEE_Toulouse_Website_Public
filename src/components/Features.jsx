import React from 'react';
import './Features.css';
import registration from "../assets/images/registration.png";
import host_family  from "../assets/images/host_family.png"
import form1 from "../assets/images/form1.png"
import form2 from "../assets/images/form2.png"
import form_completed1 from "../assets/images/form_completed1.png"
import form_completed2 from "../assets/images/form_completed2.png"
import modify_parent from "../assets/images/modify_parent.png"
import delete_parent from "../assets/images/delete_parent.png"
import contact_us from "../assets/images/contact_us.png"

const Features = () => {
    return (
        <section className="section" style={{ padding: "30px" }}>
            <div className="container">
            <h1 className="title is-1">Some Features</h1>
                <div className="columns is-centered" style={{ display: "flex", flexWrap: "wrap" }}>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={registration} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Login / registration page</h4>
                                <p>Where an already registered user can login and a new user can sign up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={host_family} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Host family page</h4>
                                <p>Information about hosting, requirements and a sign up button that redirects to the registration page</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={form1} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Host family form</h4>
                                <p>After registration, host families are automatically directed to this page and are invited to complete the form. At each steps, data are saved in the database so that host families don't lose their information if they are disconnected during the process. When login again they are directed to this page and are invited to complete the form.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={form2} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Example of information to complete</h4>
                                <p>Users can add one or several parents and have to complete information in order to be able to go to the next step.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={form_completed1} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Completed form page</h4>
                                <p>Once the form is submitted, host family will be redirected to this page where they can consult, update and/or delete their information</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={form_completed2} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Example of section display</h4>
                                <p>Host family can click on a section and display information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={delete_parent} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Form options</h4>
                                <p>At the bottom of each section, host family have the ability to update information of delete the section. On parent, child and student bedroom section they can add other sections.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={modify_parent} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Update information</h4>
                                <p>When clicking on "modifier" host family can retrieve and update the chosen information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-5 feature-item" style={{ margin: "10px" }}>
                        <div className="feature-image-container">
                            <img src={contact_us} alt="Feature" className="feature-image"/>
                            <div className="feature-description has-text-justified" style={{ display: "flex", alignItems: "normal" }}>
                                <div className="content">
                                <h4>Contact</h4>
                                <p>In the contact section, host family can directly contact the center director by clicking on the email. It will use the default messaging app on their device to directly send an email.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;