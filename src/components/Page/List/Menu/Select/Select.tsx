import { useState} from 'react';
import { Container } from './SelectStyle';
// import {  } from "react-icons/fa";

export default function Select(){
   const [isOpen, setIsOpen] = useState(false);
   const [valueSelected, setValueSelected] = useState(String);
   function handleSelect(){
      setIsOpen(!isOpen);

   }

   function handleSelectDisplay(e: any){
      if(e.target.outerText === 'Rent'){
         setValueSelected('Rent');
      }
      if(e.target.outerText === 'Sale'){
         setValueSelected('Sale');
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