import React from "react";
import { ButtonWrapper } from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
    color: 'green' | 'yellow' | 'red';
    fullfilled?: boolean;
}

const Button: React.FC<ButtonProps> = ({children, color, fullfilled, ...rest}) => {
    return (
        <ButtonWrapper color={color} fullfilled={fullfilled}>{children}</ButtonWrapper>
    )
}

export default Button;