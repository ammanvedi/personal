import styled, {keyframes} from 'styled-components';
import { getColor, getMq } from './style/theme';
import { Body } from './typography';

export const Input = styled.input`
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 8px 8px;
    border-radius: 4px;
    border: 1px solid ${getColor('text')};
`;

export const InputWrap = styled.div`
    box-sizing: border-box;
    margin: 0;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const SuccessMessageWrapper = styled.div`
    position: absolute;
    inset: 0;
    background-color: ${getColor('white')};
    animation: ${fadeIn} .3s linear forwards;
    padding: 30px 0;
`;


export const SuccessMessage = styled.span`
    max-width: 250px;
    margin: 0 auto;
    display: block;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-style: italic;
    font-family: monospace;


    img {
        width: 70%; 
        display: block; 
        margin: 0 auto;
        margin-bottom: 15px;
    }
`;

export const ButtonWrap = styled.div``;

export const SubmitButton = styled.button`
    appearance: none;
    font-weight: bold;
    border: none;
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background-color: ${getColor('link')};
    color: ${getColor('white')}
`;

export const FormWrapper = styled.div`
    min-height: 250px;
`

export const FormError = styled.span`
    font-size: 0.7rem;
    font-family: monospace;
    margin-top: 20px;
    text-align: center;
    color: ${getColor('failure')};
    width: 100%;
`;

export const Form = styled.form`
    position: relative;
    border-top: 2px solid ${getColor('link')};
    padding-top: 0;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    ${Body} {
        font-style: italic;
        width: 100%;
        text-align: center;
    }

    ${InputWrap}, ${ButtonWrap} {
        padding: 5px 0;
    }

    @media(min-width: ${getMq('p')}) {
        flex-direction: row;
        flex-wrap: wrap;

        ${InputWrap} {
            flex: 0 1 50%;
            padding: 10px 0;
        }

        ${InputWrap}:nth-child(2) {
            padding-right: 5px;
        }

        ${InputWrap}:nth-child(3) {
            padding-left: 5px;
        }

        ${ButtonWrap} {
            flex: 1 0 100%;
        }
    }

    @media(min-width: ${getMq('t')}) {
        flex-direction: row;

        ${InputWrap}, ${ButtonWrap} {
            flex: 1 1 auto;
            padding: 0;
        }

        ${InputWrap} {
            padding-right: 8px;
        }
    }
`