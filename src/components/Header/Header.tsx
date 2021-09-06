import { Container, Content, IconHome } from './HeaderStyle';
import { Link } from 'react-router-dom'

export default function Header(props: any) {
    return (
        <Container>
            <Content>
                <nav>
                    <IconHome></IconHome>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact us</Link>
                    <Link to="/about">About</Link>
                    <button onClick={props.onHandleModal}>Sign in</button>
                </nav>
            </Content>
        </ Container>
    )
}