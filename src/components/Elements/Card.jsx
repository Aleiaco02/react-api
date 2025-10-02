const Card = (props) => {
    const { actors } = props
    return (
        <div className="col-sm-12 col-md-3" key={actors.id}>
            <div className="card h-100 shadow-sm">
                {/* IMMAGINE SOPRA */}
                <img
                    src={actors.image}
                    alt={actors.name}
                    className="card-img-top "

                />
                {/* CONTENUTO SOTTO */}
                <div className="card-body">
                    <h5 className="card-title">{actors.name}</h5>
                    <p className="card-text my-2 gray">
                        <small>{actors.birth_year} • {actors.nationality}</small>
                    </p>
                    <div className="container-card-text">
                        <p
                            className="card-text"
                        >
                            {actors.biography}
                        </p>
                    </div>


                    {/* bonus 3 */}
                    <ul className="known-for">
                        <li><h3>Known for</h3></li>
                        {actors.known_for.map((element, i) => (
                            <li className="li-known-for" key={i}>{element}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{actors.awards}</small>
                </div>
            </div>
        </div>
    )
}

export default Card