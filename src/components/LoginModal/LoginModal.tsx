import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import { Body, 
         Modal, 
         InputField, 
         Button, 
         GoogleButton,
         ButtonArea } from './LoginModalStyle';

export default function LoginModal(props: any){
   
   const [isActivated, setIsActive] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const closeModal = () => {
      setIsActive(false);
   }

   useEffect(() => {
      setIsActive(props.openModal);
   }, [props]);
   
   return(
      <>
         {isActivated && 
            <Body>
               <Modal>
                  <div>
                     <FaTimes onClick={closeModal} />
                  </div>
                  <h3>Sign in to SyHome</h3>
                  <label>Login</label>
                  <InputField 
                     type="text" 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)} />
                  <label>Password</label>
                  <InputField 
                     type="password" 
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} />
                  <ButtonArea>
                     <Button 
                        type="submit"
                        // onClick={() => signInWithEmailAndPassword(email, password)}
                        >Sign in</Button>
                     <GoogleButton>Sign in with Google</GoogleButton>
                  </ButtonArea>
               </Modal>
            </Body>
         }
      </>
   );
}
