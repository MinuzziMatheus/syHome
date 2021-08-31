import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Container,
         ContentLeftSide, 
         ContentRighttSide,
         MoreInformation, 
         BackIcon
} from './HouseDetailStyle';

export default function HouseDetail(){
   const { id }: {id: string} = useParams();
   const house: any = useSelector((state: any) => {
      for(let x = 0; x < state.length; x++) {
         for(let y = 0; y < state[x].length; y++){
            if(state[x][y].id === id){
               return state[x][y];
            }
         }
      }
   });
   
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
               <p>{house.about}</p>
            </ContentRighttSide>
         </Container>
      </>
   );
}