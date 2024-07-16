const Story = () => {
    return (
        <div className="section" style={{ padding: "30px" }}>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-6">
                        <div className="content">
                        <h1 className="title is-2">Project story</h1>
                        <p className="is-size-4">
                            The solution I would have like to have in my previous job
                        </p>
                        <h2>Finding an idea</h2>
                        <p className="is-size-5 has-text-justified">
                            The idea for this project emerged before entering the school. 
                            As I previously worked as a program coordinator in a study abroad center
                            welcoming students from the united states,
                            I was, along with colleagues and among other tasks, in charge of host families recruitment.
                            </p>
                        <h2>Respond to a real need</h2>
                        <p className="is-size-5 has-text-justified">
                            The host families recruitment process was very manual, time consuming and prone to mistakes.
                            Inspired by Seville's center website, 
                            which is the sole example of a site center 
                            among the 40 CIEE centers in the world, 
                            I decided to create a website for CIEE Toulouse center
                            focusing on the most crucial aspect first.
                        </p>
                        <h2>Research and development</h2>
                        <p className="is-size-5 has-text-justified">
                            As I am new in the world of web development, I spent plenty of time 
                            reading former students portfolios project blogs, learn about tools and technologies.
                            From that inspiration as well as knowledge and skills acquired during the past months at Holberton School, 
                            I designed a relatively simple single page application with a few features.
                        </p>
                        <h2>Building the project</h2>
                        <p className="is-size-5 has-text-justified">
                            The building process is divided into the following parts:
                            <ol>
                                <li>Design the database</li>
                                <li>Build python classes with SQLAlchemy</li>
                                <li>Build the routes with FastAPI</li>
                                <li>Build the front-end with React</li>
                                <li>Style the frontend with Bulma</li>
                            </ol>
                        </p>
                        <h2>What's next</h2>
                        <p className="is-size-5 has-text-justified">
                            <ul>
                                <li>Learn more about GDPR regulation</li>
                                <li>Implement incremental backups, automatic data deletion and complete data encryption</li>
                                <li>Implement any other necessary security</li>
                                <li>Add a features for host families to position themselves to specific chosen program</li>
                                <li>Create user roles and permissions in the database</li>
                                <li>Manage user roles in the application</li>
                                <li>Build the staff admin interface and data extraction and/or dashboard</li>
                            </ul>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Story;