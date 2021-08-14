import styled from 'styled-components';

export const Container = styled.footer`
    position: absolute;
    width: 100%;
    background-color: var(--orange-900);
    padding-bottom: 2rem;

    .logoArea{
        vertical-align: middle;
        
        display: flex;
        flex-direction: row;
        vertical-align: middle;
        padding: 14px 0 0 20px;

        .logoIcon{
            color: var(--background);
            font-size: 3rem;
            margin-right: 5px;
        }

        span{
            margin-top: 5px;
            color: var(--background);
            font-weight: bold;
            font-size: 1.5rem;
        }
    }
`;

export const Content = styled.div`
    width: 80%;
    padding-top: 1rem;

    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-left: 5rem;

    input{
        width: 350px;
        height: 2rem;
        border-radius: 5px;

        border: none;
    }

    p{
        color: var(--background);
        font-weight: bold;
    }

    label {
        color: var(--background);
        margin-right: 1rem;
    }

    .formArea{
        margin-top: 1rem;
    }

    @media (max-width: 600px){
        input{
            width: 250px;
        }
        
    }
`;
