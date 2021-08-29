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

export const Loading = styled.p`
    width: 100%;
    height: 500px;
    font-size: 20px;
    margin: 20px 0;
    font-weight: bold;
    text-align: center;
    color: var(--orange-900);
`;