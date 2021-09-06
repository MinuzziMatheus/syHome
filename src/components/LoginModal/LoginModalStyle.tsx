import styled from 'styled-components';

export const Body = styled.div`
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   z-index: 20;
   background-color: rgba(58, 57, 57, 0.61);
`;

export const Modal = styled.div`
   display: flex;
   flex-direction: column;
   align-items: left;
   padding: 20px;
   height: 400px;
   width: 300px;
   border-radius: 20px;
   background-color: var(--background);
   
   h3 {
      text-align: center;
      margin: 25px 0;
      color: var(--orange-900);
   }

   div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
   }

   svg{
      position: relative;
      cursor: pointer;
      right: 0;
      top: 0;
   }
`;

export const ButtonArea = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Button = styled.button`
   background-color: var(--yellow-900);

   padding: 10px;
   border-radius: 10px;
   width: 7rem;
   min-height: 3rem;
   margin: 0.5rem 0;
   width: 15rem;
   transition: 0.3s ease-in-out;

   &:hover {
      background-color: var(--yellow-700);
      cursor: pointer;
   }

   @media (max-width: 600px){
      margin-left: 1rem;
      width: 6rem;    
   }
`;

export const GoogleButton = styled(Button)`
   background-color: var(--background);
   border: 1px solid var(--yellow-700);

   &:hover{
      background-color: var(--yellow-900);
   }
`;

export const InputField = styled.input`
   width: 100%;
   margin: 5px 0;
   padding: 5px;
   border: none;
   padding-left: 10px;
   border-radius: 10px;
   background-color: var(--gray-200);
`;