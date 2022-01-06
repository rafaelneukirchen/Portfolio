import styled from 'styled-components';
import restaurant from '../../images/restaurant.jpg';
import ButtonElement from '../../components/Button';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: no-wrap;
`

export const LateralFoto = styled.div`
    width: 50%;
    height: 100vh;
    background: url(${restaurant}) fixed center no-repeat;
    background-size: cover;
    filter: sepia(1);
    `

export const FormWrapper = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    margin: 0 12.5%;
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    & > label + label { 
        margin-top: 8px;
    }
`

export const Label = styled.label`
    font-size: 16px;
    color: #B47864;
`

export const LabelWrapper = styled.div`
    margin-bottom: 16px;
`

export const Input = styled.input`
    width: 100%;
    font-size: 28px;
    padding: 4px;
    border: 1px solid #B47864;
    border-radius: 10px;
`

export const ButtonWrapper = styled.div`
    width: 100%;
`

export const Button = styled(ButtonElement)`

`