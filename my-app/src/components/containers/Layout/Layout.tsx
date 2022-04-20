import classes from './Layout.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Grid from '../Grid/Grid';

const Layout: React.FC<any> = function({children}) {
    return (
        <div className={classes.layout}>
            <Header />
            <div className={classes.wrapper}>
                <main>
                    <Grid>
                        {children}
                    </Grid>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default Layout;