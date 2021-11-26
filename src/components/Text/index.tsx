import React from 'react';
import { TextWrapper } from './styles';

interface TextProps{
    size: number;
    italic?: boolean;
    weight?: '500' | '600' | '700' | '900';
    animation?: 'upper' | 'lower';
}

const Text: React.FC<TextProps> = ({children, size, italic, animation}) => {
    return(
        <TextWrapper size={size} italic={italic} animation={animation}>{children}</TextWrapper>
    )
}

export default Text;