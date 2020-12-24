import { Container, Button, ListGroup } from 'react-bootstrap'

import HeartIcon from './HeartIcon'

const FavList = ({ planets, handleReset, handleFavToggle }) => {
    return (
        <Container>
            <Button size='sm' className='reset-btn' onClick={() => handleReset()}>
                <i className="fas fa-redo mr-2"></i>Reset
            </Button>

            <div className='info mt-2' >Add/remove your favourite(<HeartIcon icon="fas fa-heart" pid={null} handleClick={handleFavToggle} />) planets</div>

            <ListGroup variant="flush">
                {planets.length > 0 && planets.map((p) => {
                    return (
                        p.isFavourite && <ListGroup.Item key={p.id}>
                            <HeartIcon icon="mr-3 fas fa-heart" pid={p.id} handleClick={handleFavToggle} />
                            {p.name}
                        </ListGroup.Item>
                    )
                })
                }
            </ListGroup>
        </Container>)
}

export default FavList