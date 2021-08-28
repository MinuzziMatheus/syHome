import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 100%;
    min-height: 500px;

    div {
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`;