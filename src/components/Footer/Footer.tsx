import { Container, Content } from './FooterStyle';
import { FaHome } from 'react-icons/fa';

export default function Footer(){
    return (
        <Container>
            <div className="logoArea">
                <FaHome className="logoIcon" />
                <span>SyHome</span>
            </div>
            <Content>
                <p>Subscribe in to see personalized recommendations</p>
                <div className="formArea">
                    <label>E-Mail:</label>
                    <input type="text"></input>
                </div>
            </Content>
        </Container>
    )
};