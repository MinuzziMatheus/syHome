import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    vertical-align: middle;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const Content = styled.div`
    background-color: #eeeeee;
    text-align: center;
    
    z-index: 10;
    border-radius: 10px;
    margin-top: 2rem;
    padding: 1rem;

    img{
        width: 200px;
    }

    h4{
        color: var(--orange-900);
        margin-bottom: 1rem;
    }

    div{
        input{
            border: none;
            padding-left: 10px;
            border-radius: 10px;
        }
        
        textarea{
            border: none;
            padding-left: 10px;
            border-radius: 10px;
            width: 100%;
            height: 100px;
        }

        & + div{
            margin-top:1rem;
        }
    }

    button { 
        background-color: var(--yellow-900);

        padding: 10px;
        border-radius: 10px;
        width: 5rem;
        min-height: 3rem;

        &:hover {
            background-color: var(--yellow-700);
            cursor: pointer;
        }

        @media (max-width: 600px){
            margin-left: 1rem;
            width: 6rem;    
        }
    }
`;