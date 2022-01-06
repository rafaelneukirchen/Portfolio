import React from 'react';
import { Grid } from './style';

export interface ContainerProps{
    cols: number;
    rows: number;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({children, className, ...resp}) => {
    return(
        <Grid className={className} {...resp}>
            {children}
        </Grid>
    )
}

export default Container;