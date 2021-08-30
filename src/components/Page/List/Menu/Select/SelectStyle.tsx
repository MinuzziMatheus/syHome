import styled from 'styled-components';

export const Container = styled.div`
        /* Size & position */
        position: relative;
        width: 200px;
        height: 40px;
        padding: 12px 15px;
        vertical-align: middle;
        margin: auto 10px 0 0;

        /* Styles */
        background: var(--background);
        border-radius: 5px;
        box-shadow: 0 1px 0 rgba(0,0,0,0.2);
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease-out;

    &:after{
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -3px;
        border-width: 6px 6px 0 6px;
        border-style: solid;
        border-color: var(--orange-900) transparent;
    }

    .dropdown{
        /* Size & position */
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 2;

        /* Styles */
        background: var(--background);
        border-radius: 0 0 5px 5px;
        border: 1px solid rgba(0,0,0,0.2);
        border-top: none;
        border-bottom: none;
        list-style: none;
        transition: all 0.3s ease-out;

        /* Hiding */
        max-height: 0;
        overflow: hidden;
    }

    .dropdown li button {
        display: block;
        text-decoration: none;
        text-align: center;
        color: #333;
        padding: 10px 0;
        transition: all 0.3s ease-out;
        border-bottom: 1px solid #e6e8ea;

        width: 100%;
        background-color: #FFF;
    }

    .dropdown li:last-of-type button {
        border: none;
    }

    .dropdown li i {
        margin-right: 5px;
        color: inherit;
        vertical-align: middle;
    }

    /* Hover state */

    .dropdown li:hover button {
        color: var(--orange-700);
    }

    &.active {
        border-radius: 5px 5px 0 0;
        background: var(--orange-900);
        box-shadow: none;
        border-bottom: none;
        color: white;
    }

    &.active:after {
        border-color: var(--background) transparent;
    }

    &.active .dropdown {
        border-bottom: 1px solid rgba(0,0,0,0.2);
        max-height: 400px;
    }
`;