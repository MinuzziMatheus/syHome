import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin: 10px;
    max-width: 100%;
`;


export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    margin: 10px;
    width: 250px;
    height: 350px;
    border-radius: 20px;

    background-color: var(--background);
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);

    .cardImage{
        max-width:100%;
        max-height:100%;
    }

    .cardImage img {
        width: 100%;
        height: 168px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .cardImage span{
        position: absolute;
        text-align: center;
        height: 48%;
        width: 100%;
        left: 0;
        top: 0;
        opacity: 0;
        line-height: 10;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        background-color: #5a5959;
        color: #FFF;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .cardImage span:hover{
        opacity: 0.4;
    }

    .cardContent{
        text-align: center;
    }

    .cardTitle{
        margin-top: 10px;
        margin-bottom: 5px;
        color: var(--orange-900);
    }

    .cardDescription{
        font-size: 10px;
        color: #747170;
    }

    .cardCity{
        margin-top: 5px;
    }

`;

export const CardFooter =  styled.footer`
    display: flex;
    flex-direction: row;
    position: absolute;
    line-height: 2.2;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 100%;
    height: 10%;
    bottom: 0;

    background-color: var(--orange-900);
    color: #FFF;

    .cardSize{
        width: 40%;
        border-right: 1px solid var(--orange-700);
    }

    .cardPrice{
        width: 60%;
    }
`;

export const Loading = styled.div`

`;