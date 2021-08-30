import styled from 'styled-components';
import { FaChevronLeft } from "react-icons/fa";


export const BackIcon = styled(FaChevronLeft)`
   margin: 1rem 1rem 1rem 8rem;
   font-size: 1.5rem;
   color: var(--orange-900);

   &:hover{
      transform: translate(-2px);
      transition: 0.3s ease-in-out;
   }
`;

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   min-height: 490px;


   @media (max-width: 880px){
      flex-direction: column;
      min-height: 695px;
   }
`;

export const ContentLeftSide = styled.section`
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 70%;

   img{
      height: 350px;
      max-width: 70%;
      border-radius: 10px;
      margin-bottom: 0.5rem;
   }

   @media (max-width: 880px){
      width: 100%;

      img{
         max-width: 90%;
      }
   }

   @media (max-width: 880px){
      width: 100%;
   }

   
`;

export const ContentRighttSide = styled(ContentLeftSide)`
   padding: 5px 30px 5px 5px;
   justify-content: center;
   text-align: justify;
   width: 40%;

   @media (max-width: 880px){
      margin-top: 1.5rem;
   }
`;

export const MoreInformation = styled.div`
   display: flex;
   flex-direction: row;

   p{
      vertical-align: middle;
      color: var(--background);
      background-color: var(--orange-900);
      border-radius: 20px;
      padding: 0.5rem;
      margin-right: 2rem;
   }

   p:last-child{
      margin-right: 0;
   }
`;

export const BackBtn = styled.button`
   padding: 10px;
   border-radius: 10px;
   margin: 1rem;

   width: 8rem;
   min-height: 3rem;

   &:hover {
      border: 1px solid var(--yellow-700);
      cursor: pointer;
   }
`;

