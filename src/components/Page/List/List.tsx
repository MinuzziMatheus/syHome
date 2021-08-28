import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './ListStyle';
import Menu from './Menu/Menu';
import Card from './Card/Card';


export default function List(){

    const [houses, setHouses] = useState([] as any);
    const [isLoading, setIsLoading] = useState(true as boolean);
    const [filterCity, setFilterCity] = useState('');
    const [filterDistrict, setFilterDistrict] = useState('');
    const [filterType, setFilterType] = useState('');
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
                    price: responseData[key].price,
                    type: responseData[key].type,
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

    const filteredCity = (cityName: any) => {
        setFilterCity(cityName.target.value)
    };

    const filteredDistrict = (districtName: any) => {
        setFilterDistrict(districtName.target.value);
    }

    const filteredType = (typeName: any) => {
        setFilterType(typeName);
    }

    return(
        <>
            <Container>
                <Menu onFilterCity={filteredCity} 
                      onFilterDistrict={filteredDistrict}
                      onFilterType={filteredType}/>
                <div className="cardContainer">
                    {houses.filter((val: any) => {
                        if(filterCity === ''){
                            return val
                        } else if(val.city.toLowerCase().includes(filterCity.toLocaleLowerCase())){
                            return val
                        }
                    }).filter((val: any) => {
                        if(filterDistrict === ''){
                            return val
                        } else if (val.neighborhood.toLowerCase().includes(filterDistrict.toLocaleLowerCase())){
                            return val
                        }
                    }).filter((val: any) => {
                        if(filterType === ''){
                            return val
                        } else if (val.type.toLowerCase().includes(filterType.toLocaleLowerCase())){
                            return val
                        }
                    }).map((house: any) => <Card key={house.id} house={house}/>)}
                </div>
            </Container>
        </>
    );
}