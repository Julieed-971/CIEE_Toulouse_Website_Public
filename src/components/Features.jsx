import React from 'react';
import './Features.css';
import registration from '../assets/images/registration.png';

const Features = () => {
    return (
        <section id="Features" className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-5 feature-item">
                        <h1 className="title is-1">Some Features</h1>
                        <div className="feature-image-container">
                            <img src={registration} alt="Feature" className="feature-image"/>
                            <div className="feature-description">
                                <h2>Login / registration page</h2>
                                <p>Where a already registered user can login and a new user can sign up</p>
                            </div>
                        </div>
                        <p className="is-size-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;