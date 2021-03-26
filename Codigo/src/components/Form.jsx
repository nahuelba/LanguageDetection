import {Fragment, useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const useStyles = makeStyles((theme) => ({

    button: {
      margin: theme.spacing(3),
      width: '300px',
    },
  }));



const Form = ({setSentenceAPI, setPreventrunfirsttime}) => {
    const classes = useStyles();

    const [sentence, setSentence] = useState('');
    const [error, setError] = useState(false);
    

    const setValue = e =>{
        
        setSentence(e.target.value);
    }

    const submitSentence = e =>{
        e.preventDefault();


        //validate textfield
        if (sentence.trim()===''){
            setPreventrunfirsttime(false);
            setError(true);
            
            return;
        }

        //delete error message
        setError(false);

        
        //confirm sentence
        setSentenceAPI(sentence);

        //set true
        setPreventrunfirsttime(true);



    }



    return ( 
        <Fragment>

       <form
        onSubmit={submitSentence}
       >
            <TextField 
                //error message
                error={error ? true : false}
                helperText= {error ? "Error. Field empty." : null}
               
                label="Write a sentence"
                variant="outlined" 
                fullWidth
                multiline
                rowsMax={8}
                onChange={setValue}
                value={sentence}
            />  
            <Grid container justify="center">
                <Button
                    type="submit"
                    variant="contained"
                    color="primary" 
                    className={classes.button}
                    endIcon={<Send />}
                    size="large"
                >
                Detect
                </Button>
            </Grid>
              
          </form>
          </Fragment>
     );
}

Form.propTypes = {
    setSentenceAPI: PropTypes.func.isRequired,
    setPreventrunfirsttime: PropTypes.func.isRequired,
  };
 
export default Form;