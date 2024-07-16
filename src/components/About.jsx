import avatar2 from "../assets/images/avatar2.png";

const About = () => {

    return (
        <section className="section" style={{ padding: "30px" }}>
            <div className="container" style={{ height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "10px" }}>
            <h1 className="title is-1">About</h1>
                <div className="columns is-centered"style={{ display: "flex", flexWrap: "nowrap" }}>
                    <div className="column is-5" style={{ margin: "10px" }}>
                    <div className="card">
                        <div className="title" style={{ padding: "10px", display: "inline-block", width: "auto" }}>
                            <h1 style={{ padding: "15px" }}>Hi, I'm Julie Dedieu!</h1>
                        </div>
                            
                            <div className="content is-size-6 has-text-justified">
                            <p style={{ padding: "30px", fontWeight: "normal" }}>
                                I am passionate about learning new languages be it human or computer. I started with human's one, graduating in Japanese and English and then graduating in teaching French as a Foreign Language.<br />
                                <br />
                                This lead me to work as a Program Coordinator at CIEE Toulouse where I coordinated College Study Abroad programs and where the idea for this portfolio project came from.<br />
                                <br />
                                This application is the tool I needed when working there and I can't wait to deliver it to facilitate former colleagues work.<br />
                                <br />
                                Operating a career switch into web development, this is where my passion for computer languages grows.
                                Combining my former professional experience with my newly acquired skills seems the best decision to make.<br />
                                <br />
                                Particularly since I have a deep and detailed understanding of my client needs.
                                I am willing to pursue this project as a portfolio project for my specialization as a Fullstack Developer at Holberton School.<br />
                            </p>
                            </div>
                    </div>
                    </div>
                        <div className="column is-5" style={{ margin: "21px" }}>
                        <div className="card">
                            <div className="columns" style={{ display: "flex", justifyContent: "space-around"}}>
                                <div className="column is-4" style={{ margin: "10px" }}>
                                <figure className="image">
                                    <img
                                    title="avatar"
                                    style={{ width: "144px", height: "192px", borderRadius: "10%" }}
                                    src={avatar2}
                                    alt="avatar"
                                    />
                                </figure>
                                </div>
                                <div className="column is-6">
                                    <div className="title">
                                        <h1 style={{ padding: "10px" }}>Follow me!</h1>
                                    </div>
                                    <div className="content is-size-6 has-text-justified">
                                        <a href="https://github.com/Julieed-971/CIEE_Toulouse_website"
                                        target="_blank"
                                        rel="noopener noreferrer" style={{ margin: "20px" }}>
                                        <i className="fab fa-github" style={{ margin: "20px" }}></i>
                                        My Github
                                        </a>
                                    < br />
                                        <a href="https://www.linkedin.com/in/julie-dedieu-a5404394/"
                                         target="_blank"
                                          rel="noopener noreferrer"
                                           style={{ margin: "20px" }}>
                                        <i className="fab fa-linkedin" style={{ margin: "20px" }}></i>
                                        My LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <div className="column">
                        <div className="title">
                            <h1>Project repository</h1>
                        </div>
                        <div className="content is-size-6 has-text-justified">
                        <a href="https://github.com/Julieed-971/CIEE_Toulouse_website"
                        target="_blank"
                        rel="noopener noreferrer" style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <i className="fab fa-github" style={{ marginRight: "10px", marginBottom: "20px" }}></i>
                        CIEE Toulouse center website repository</a>
                        <div className="content is-size-6">
                            <em style={{ fontWeight: "normal" }}>As this project is meant to be delivered to CIEE Toulouse, this repo is private, sorry!</em>
                        </div>
                        <div className="content is-size-6">
                            <h4 style={{ fontWeight: "normal" }}>Contact: </h4>
                            <i className="fas fa-envelope" style={{ marginRight: "10px" }}></i>
                            <a href="mailto:7480@holbertonstudents.com">7480@holbertonstudents.com</a>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
    </section>
    );
};

export default About;