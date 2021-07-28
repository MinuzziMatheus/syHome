import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;

    .bgContent{
        background-color: rgba(241, 238, 238, 0.7);
        padding: 30px;
        height: 350px;
        width: 50%;
        border-radius: 30px;

        img{
            height: 0;
            width: 0;
        }
    }

    .textContent{
        padding: 30px;
        width: 50%;
    }

    .showP {
        height: 300px!important;
        width: 100%!important;
        position: relative;
        left: -30em;
        -webkit-animation: slide-left 1s forwards;
        animation: slide-left 1s forwards;

        @-webkit-keyframes slide-left {
            100% { left: 0 }
        }

        @keyframes slide-left {
            100% { left: 0 }
        }
    }

    .showT {
        height: 300px!important;
        width: 100%!important;
        position: relative;
        right: -30em;
        -webkit-animation: slide-right 1s forwards;
        animation: slide-right 1s forwards;

        @-webkit-keyframes slide-right {
            100% { right: 0 }
        }

        @keyframes slide-right {
            100% { right: 0 }
        }
    }


    


    @media (max-width: 600px) {
        flex-direction: column;

        .bgContent{
            width: 100%;
        }

        .textContent{
            width: 100%;
        }
    }
`;