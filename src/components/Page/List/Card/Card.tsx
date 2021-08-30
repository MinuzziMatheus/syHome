import { Body, CardBody, CardFooter } from './CardStyle';
import { Link } from 'react-router-dom';


export default function Card(house: any){

    return(

        <Body>
            <CardBody key={house.house.id}>
                <div className="cardImage">
                    <Link to={`/list=${house.house.id}`}>
                    <img src={house.house.image} alt="casa" />
                    <span>Click to see more!</span>
                    </Link>
                </div>
                <div className="cardContent">
                    <h2 className="cardTitle">{house.house.title}</h2>
                    <p className="cardDescription">{house.house.description}</p>
                    <p className="cardCity">{house.house.city} / {house.house.neighborhood}</p>
                    <CardFooter>
                        <p className="cardSize">{house.house.size}</p>
                        <p className="cardPrice">{house.house.price}</p>
                    </CardFooter>
                </div>
            </CardBody>
        </Body>
    )
}