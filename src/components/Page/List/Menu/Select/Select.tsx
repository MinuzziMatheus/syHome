import { useState} from 'react';
import { Container } from './SelectStyle';

export default function Select(props: any){
   const [isOpen, setIsOpen] = useState(false);
   const [valueSelected, setValueSelected] = useState(String);
   function handleSelect(){
      setIsOpen(!isOpen);

   }

   function handleSelectDisplay(e: any){
      if(e.target.outerText === 'Rent'){
         setValueSelected('Rent');
         props.filteredType(e.target.outerText);
      }
      if(e.target.outerText === 'Sale'){
         setValueSelected('Sale');
         props.filteredType(e.target.outerText);
      }
   }

   return(
      <Container tabIndex={1} onClick={handleSelect} className={isOpen ? 'active' : ''}>
         <p>{valueSelected}</p>
         <ul className="dropdown">
            <li><a href="#" onClick={handleSelectDisplay}>Rent</a></li>
            <li><a href="#" onClick={handleSelectDisplay}>Sale</a></li>
         </ul>
      </Container>
    );
}