import { useState }  from 'react';
import { Redirect } from 'react-router';

import { Container, Content, Button, ImgHome } from './HomeStyle';

import homePhoto from '../../../assets/syHomePicture.svg';

export default function Home(){
    
    const [callList, setCallList] = useState(false);
    function callListHandle(){
        setCallList(!callList);
    }

    if(callList) {
        return <Redirect to="/list" />
    }

    return (
        <>
            <Container>
                <Content>
                    <h2>This is your first step <br/>to found a home for you!</h2>
                    <Button onClick={callListHandle}>Take a look</Button>
                </Content>
                <ImgHome src={homePhoto} alt="Home Picture"/>
            </Container>
        </>
    );
}