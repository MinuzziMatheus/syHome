import { Container, Content } from './ContactStyle';
import contactImg from '../../../assets/contact-background-image.svg';

export default function Contact(){

    function handleSubmit(event: any){
        event.preventDefault();
        console.log(event.target[1].value);
    };

    return (
        <>
            <Container>
                <Content>
                    <img src={contactImg} alt="teste" />
                    <h4>Get in touch!</h4>
                    <form className="formArea" onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder="Name"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="E-mail"></input>
                        </div>
                        <div>
                            <textarea placeholder="Your message"></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </Content>
            </Container>
        </>
    )
};