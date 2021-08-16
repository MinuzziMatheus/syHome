import { useEffect, useState } from 'react';

import { Body, CardBody, CardFooter } from './CardStyle';

export default function Card(){

    const [houses, setHouses] = useState([] as any);

    useEffect(() => {
        const fetchHouse = async () =>{
            const response = await fetch('LINK API AQUI');
            const responseData = await response.json();
            const loadedHouses = [];

            for(const key in responseData){
                loadedHouses.push({
                    id: key,
                    image: responseData[key].image,
                    title: responseData[key].title,
                    description: responseData[key].description,
                    neighborhood: responseData[key].neighborhood,
                    city: responseData[key].city,
                    size: responseData[key].size,
                    price: responseData[key].price
                });
            }
            setHouses(loadedHouses);
        }

        fetchHouse();
    }, [])
    
    return(
        <Body>
            {
                houses.map((house: any) => {
                    return( <CardBody key={house.id}>
                        <div className="cardImage">
                            <img src={house.image} alt="casa" />
                            <span>Click to see more!</span>
                        </div>
                        <div className="cardContent">
                            <h2 className="cardTitle">{house.title}</h2>
                            <p className="cardDescription">{house.description}</p>
                            <p className="cardCity">{house.city} / {house.neighborhood}</p>
                            <CardFooter>
                                <p className="cardSize">{house.size}</p>
                                <p className="cardPrice">{house.price}</p>
                            </CardFooter>
                        </div>
                    </CardBody>)
                })
            }
        </Body>
    )
}