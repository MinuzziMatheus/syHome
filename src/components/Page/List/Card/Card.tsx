import { Body, CardBody, CardFooter } from './CardStyle';

export default function Card(house: any){

    return(
        <Body>
            <CardBody key={house.house.id}>
                <div className="cardImage">
                    <img src={house.house.image} alt="casa" />
                    <span>Click to see more!</span>
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