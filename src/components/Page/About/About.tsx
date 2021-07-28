import { useState } from 'react';
import { Container, Content } from './AboutStyle';
import profileSvg from '../../../assets/profile.svg';
import teamSvg from '../../../assets/team.svg';

export default function About(){
    const [showImgProfile, setShowImgProfile] = useState('hiddenP');
    const [showImgTeam, setShowImgTeam] = useState('hiddenT');


    function handleScroll(){
        if(document.documentElement.scrollTop > 350){
            return;
        }
        if(document.documentElement.scrollTop > 10){
            setShowImgProfile('showP');
        }
        if(document.documentElement.scrollTop > 250){
            setShowImgTeam('showT');
        }
    }

    window.onscroll = () => handleScroll()

    return(
        <Container>
            <Content>
                <div className="bgContent">
                    <img src={profileSvg} className={showImgProfile} alt="svg-picture"/>
                </div>
                <div className="textContent">
                    <h4>Who we are?</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>                
            </Content>
            <Content>
                <div className="textContent">
                    <h4>Our team</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="bgContent">
                    <img src={teamSvg} className={showImgTeam} alt="svg-team"/>
                </div>
            </Content>
        </Container>
    );
}