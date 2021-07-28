import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

export const Container = styled.header`
    max-width: 1120px;
    max-height: 50vh;
    margin: 0 auto;

`;

export const Content = styled.div`
    padding: 1rem 1rem 0;
    width: 100%;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;

    nav{ 
        margin-left: 5rem;
        border-bottom: 1px solid #ccc;
        height: 5rem;
        width: 80%;

        text-align: center;

        a{
            display: inline-block;
            padding-top: 1rem;
            position: relative;
            transition: color 0.2s;

            height: 5rem;

            & + a {
                margin-left: 2rem;
            }

            &::after {
                    content: '';
                    height: 5px;
                    width: 5px;
                    border-radius: 20px;
                    margin-top: -100px;
                    margin-left: -50%;
                    
                    background-color: var(--orange-900);
                    position: absolute;
                }

            &:hover {
                color: var(--orange-900);
                cursor: pointer;

                &::after {
                    transition: margin 0.5s;
                    margin-top: 0;
                }
            }
        }

        button {
            margin-top: 10px;
            float: right;
        }

        @media (max-width: 600px){
            margin-left: 1rem;
        }
    }

    button { 
        background-color: var(--yellow-900);

        padding: 10px;
        border-radius: 10px;
        margin-left: 5rem;

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

export const IconHome = styled(FaHome)`
    color: var(--orange-900);
    font-size: 3rem;
    margin-right: 3rem;
    float: left;

    @media (max-width: 600px){
        display: none;
    }
`