export default function Card(props) {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.src} className="card-img-top" alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.github} className="btn btn-primary">Github</a>
            </div>
        </div>
    );
}
