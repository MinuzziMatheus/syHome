import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
// import { FaChevronLeft } from "react-icons/fa";

import { Container,
         ContentLeftSide, 
         ContentRighttSide,
         MoreInformation, 
         BackIcon
} from './HouseDetailStyle';

export default function HouseDetail(){
   const { id }: {id: string} = useParams();
   const houses: any = useSelector(state => state);

   const returnHouse = (house: any) => {
      for(let x = 0; x < house.length; x++) {
         for(let y = 0; y < house[x].length; y++){
            if(house[x][y].id === id){
               const houseUnique = house[x][y];
               return houseUnique;
            }
         }
      }
   };
   
   const house = returnHouse(houses);
   return(
      <>
         <Link to="/list">
            <BackIcon />
         </Link>
         <Container>
            <ContentLeftSide>
               <img src={house.image} alt="img-carousel" />
               <MoreInformation>
                  <p>{house.neighborhood} / {house.city}</p>
                  <p>Size: {house.size}</p>
                  <p>Price: R$ {house.price}</p>
               </MoreInformation>
            </ContentLeftSide>
            <ContentRighttSide>
               <h2>{house.title}</h2>
               <p>{house.description}</p>
            </ContentRighttSide>
         </Container>
      </>
   );
}