import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './ListStyle';
import Menu from './Menu/Menu';
import Card from './Card/Card';


export default function List(){

    const store = useSelector(state => state);
    const [houses, setHouses] = useState([] as any);
    const [isLoading, setIsLoading] = useState(true as boolean);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchHouse = async () =>{
            const response = await fetch('https://syhome-b674c-default-rtdb.firebaseio.com/houses.json');
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
            setIsLoading(false);
            dispatch({type: 'INITIAL', houses: loadedHouses});
        }
        
        fetchHouse();
    }, [])

    if(isLoading){
        return (
            <p>Loading...</p>
        )
    }
    return(
        <>
            <Container>
                <Menu />
                {houses.map((house: any) => <Card house={house}/>)}
            </Container>
        </>
    );
}