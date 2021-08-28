import { Container, Content, Button } from './MenuStyle';
import Select from './Select/Select';
export default function Menu(props: any){

    return(
        <Container>
            <Content>
                <input type="text" placeholder="City" onChange={props.onFilterCity}></input>
                <input type="text" placeholder="District" onChange={props.onFilterDistrict}></input>
                <Select filteredType={props.onFilterType} />
                <Button>Search</Button>
            </Content>
        </Container>
    );
}