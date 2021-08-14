import { Body, CardBody, CardFooter } from './CardStyle';

export default function Card(){
    return(
        <Body>
            <CardBody>
                <div className="cardImage">
                    <img src="https://www.plantapronta.com.br/projetos/140/01.jpg" alt="casa" />
                </div>
                <div className="cardContent">
                    <h2 className="cardTitle">Title</h2>
                    <p className="cardDescription">Description</p>
                    <p className="cardCity">City / Neighborhood</p>
                    <CardFooter>
                        <p className="cardSize">M²</p>
                        <p className="cardPrice">Price</p>
                    </CardFooter>
                </div>
            </CardBody>
        </Body>
    )
}