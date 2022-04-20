import classes from './Header.module.scss'
import Grid from '../Grid/Grid';

const Header = function() {
    return (
            <header className={classes.header}>
                <Grid>
                    <span className={classes.span}>Testing project for Cosy-soft.</span>
                </Grid>
            </header>
    )
}

export default Header;