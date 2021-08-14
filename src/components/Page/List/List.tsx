import { Container } from './ListStyle';
import Menu from './Menu/Menu';
import Card from './Card/Card';

export default function List(){
    return(
        <>
            <Container>
                <Menu />
                <Card />
            </Container>
        </>
    );
}