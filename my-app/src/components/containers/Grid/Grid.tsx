import React from 'react';
import classes from './Grid.module.scss'

const Grid: React.FC<any> = function({children}) {
    return (
        <div className={classes.grid}>
            {children}
        </div>
    )
}

export default Grid;