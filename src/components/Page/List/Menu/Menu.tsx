import { Container, Content, Button } from './MenuStyle';
import Select from './Select/Select';
export default function Menu(){
    return(
        <>
            <Container>
                <Content>
                    <input type="text" placeholder="City"></input>
                    <input type="text" placeholder="District"></input>
                    <Select />
                    <Button>Search</Button>
                </Content>
            </Container>
        </>
    );
}