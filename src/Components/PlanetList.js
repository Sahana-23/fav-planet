import { Container, ListGroup } from 'react-bootstrap'

import HeartIcon from './HeartIcon'

const PlanetList = ({ planets, handleFavToggle }) => {
    return (
        <Container>
            <span className='info' >Choose your favourite(<HeartIcon icon="fas fa-heart" pid={null} handleClick={handleFavToggle} />) planets</span>

            <ListGroup variant="flush">
                {planets.length > 0 && planets.map((p) => <ListGroup.Item key={p.id}>
                    <HeartIcon
                        icon={p.isFavourite ? "mr-3 fas fa-heart" : "mr-3 far fa-heart"}
                        pid={p.id}
                        handleClick={handleFavToggle}
                    />
                    {p.name}
                </ListGroup.Item>)}
            </ListGroup>

        </Container>
    )
}

export default PlanetList