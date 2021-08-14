import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;

    text-align: center;
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: row;
    position: relative;
    
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;

    width: 50%;
    margin: 0 0 0 3rem;
    
    h2{
        min-width: 5rem;
        margin-bottom: 1rem;
    }
`;

export const ImgHome = styled.img`
        height: 300px;
        width: 30%;
        margin: 0;
`;

export const Button = styled.button`
        background-color: var(--yellow-900);

        padding: 10px;
        border-radius: 10px;
        border: none;
        min-width: 100px;

        &:hover {
            background-color: var(--yellow-700);
        }
`;