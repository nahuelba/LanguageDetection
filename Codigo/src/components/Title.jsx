import { Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    title:{
        margin:'30px'
    }
}));
const Title = () => {
    const classes = useStyles();
    return ( 
        <Fragment>
            <Typography 
                variant="h2" 
                align="center"
                className={classes.title}
            >
                Language Detection
            </Typography>


        </Fragment>


     );
}
 
export default Title;