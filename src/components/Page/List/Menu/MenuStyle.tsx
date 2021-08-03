import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 10px auto;
    width: 90%;
    padding: 10px;
    border-radius: 10px;

    background-color: var(--gray-200);
`;

export const Content = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;


    input {
        margin-right: 10px;
        padding: 5px;
        max-width: 55%;
        height: 40px;
        border-radius: 10px;
        border: none;
    }

    @media (max-width: 1100px){
        input {
            max-width: 25%;
        }
    }

`;

export const Button = styled.button`
        background-color: var(--orange-900);

        padding: 10px;
        border-radius: 10px;
        border: none;
        min-width: 100px;
        color: var(--background);

        &:hover {
            background-color: var(--orange-700);
        }
`;