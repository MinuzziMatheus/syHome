import { Container, Content, IconHome } from './HeaderStyle';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <IconHome></IconHome>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact us</Link>
                    <Link to="/about">About</Link>
                    <button>Sign up</button>
                </nav>
            </Content>
        </ Container>
    )
}