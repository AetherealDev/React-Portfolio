import Ziggy from '../assets/ziggy.svg';

export default function About() {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center', // Vertically align the content
    };

    const imageStyle = {
        maxHeight: '200px',
        display: 'inline',
        borderRadius: '50%', // Make the image circular
        marginRight: '20px', // Add some spacing between the image and text
    };

    return (
        <div className="about row h-100 justify-content-center align-items-center">
            <div style={containerStyle}>
                <img src={Ziggy} alt="Ziggy" style={imageStyle} />
                <div>
                    <h1>About</h1>
                    <p>My name is Ethan Siewny, I'm a full-stack web developer.</p>
                    <p>
                        I have experience with HTML, CSS, JavaScript, Node.js, Go, Rust,
                        Zig, V, Express.js, MySQL, MongoDB, and React.js.
                    </p>
                    <p>
                        My main areas of expertise lie within the MERN Stack, as well as
                        the Go Programming Language.
                    </p>
                    <p>
                        I am currently looking for a job as a full-stack web developer, and
                        am open to any opportunities.
                    </p>
                    <p>
                        I am also open to any freelance work, and am willing to work for
                        free if the project is interesting enough.
                    </p>
                </div>
            </div>
        </div>
    );
}
