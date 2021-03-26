import {Table, TableBody , TableCell , TableHead , TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({

    TableHead: {
      fontWeight:'bold'
    }
  }));

const Result = ({result, languages}) => {

    const classes = useStyles();
    return ( 
   
      

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.TableHead} variant="head">Language</TableCell>
                    <TableCell className={classes.TableHead} align="right">Confidence</TableCell> 
                </TableRow>
            </TableHead>
            <TableBody>
                {result.map((result,index) =>
                <TableRow key={index}>

                    {/*Return name of language */}
                    <TableCell>{languages.map(code => result.language===code.code ? code.name : null)}</TableCell>
                    
                    <TableCell align="right">{result.confidence}</TableCell>
 
                </TableRow>
                )}
            </TableBody>

        </Table>
    
        


     );
}

Result.propTypes = {
    result: PropTypes.array.isRequired,
    languages: PropTypes.array.isRequired,
  };
 
export default Result;