import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import Skeleton from '@material-ui/lab/Skeleton';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  skeleton:{
    width:'100%',
    height:'200px'
  }
}));



function App() {

  const [sentenceAPI, setSentenceAPI] = useState('')
  const [result, setResult] = useState([])
  const [preventrunfirsttime, setPreventrunfirsttime] = useState(false);
  //usestate for languages
  const [languages, setLanguages] = useState([])
  //loading
  const [loading, setLoading] = useState(false)


  //load languages when load page
  useEffect(() => {
    const getLanguages = async () =>{
      const languages = await axios.get('https://ws.detectlanguage.com/0.2/languages')
      setLanguages(languages.data)
    }
    getLanguages();

  }, [])


  useEffect(() => {
    if (preventrunfirsttime){
      setLoading(true);
      //set url
      let url=`https://ws.detectlanguage.com/0.2/detect?q=${sentenceAPI}&key=c34c8f15175d31129d2f656ef13e19d3`
      //consume api
      const consumeAPI = async () =>{
        let response = await axios.get(url);
        setResult(response.data.data.detections)
      }
      
      consumeAPI(); 
     
      setTimeout(() => {
        
        
        setLoading(false);

      }, 2000);
      
      

    }
    // eslint-disable-next-line
  }, [sentenceAPI])


  const classes = useStyles();
  return (
    
    <Container >
      <Title/>
      <Form
        setSentenceAPI={setSentenceAPI}
        setPreventrunfirsttime={setPreventrunfirsttime}
      />
      {
        loading
        ?
        <Skeleton variant="rect" className={classes.skeleton} />      
        :
           preventrunfirsttime
          ?
          <Result 
            result={result}
            languages={languages}
          />
          :
          null

      }

    

    </Container>
    
  );
}

export default App;
