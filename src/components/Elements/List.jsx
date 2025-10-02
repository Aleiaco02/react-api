import { useState, useEffect } from 'react'
import Card from './Card';

const List = () => {

    const [actors, setActors] = useState([]);

    function fetchCharacters() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setActors(res.data))
            .catch(error => console.log(error)
            )
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    console.log(actors);


    return (

        <div className="container my-5">
            <div className="row g-5">
                {actors.map((actor) => (
                    <Card
                        key={actor.id}
                        actors={actor}
                    />
                ))}
            </div>
        </div>




    )
}

export default List