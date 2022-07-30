import React,{useState} from 'react';
import {data} from './data.js';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import Graph from './components/graph.js';
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement,Title,Tooltip,Legend} from 'chart.js';

function App() {
  const [sName,setSName]=useState("");
  const [cData,setCData]=useState({});
  const [ideal,setIdeal]=useState(data[0]);
  const [mean,setMean]=useState({});
  const [median,setMedian]=useState({});
  const [str,setStr]=useState("Search any name");

  const m={
     "Warmth": [],
     "Reasoning": [],
     "Emotional Stability": [],
     "Dominance": [],
     "Liveliness": [],
     "Rule Conciousness": [],
     "Social Boldness": [],
     "Sensitivity": [],
     "Vigilance": [],
     "Abstractedness": [],
     "Privateness": [],
     "Apprehension": [],
     "Openness to change": [],
     "Self Reliance": [],
     "Perfectionism": [],
     "Tension": []
  }

  const m1={
    "Warmth":"",
    "Reasoning": "",
    "Emotional Stability": "",
    "Dominance": "",
    "Liveliness": "",
    "Rule Conciousness": "",
    "Social Boldness": "",
    "Sensitivity": "",
    "Vigilance":"",
    "Abstractedness": "",
    "Privateness": "",
    "Apprehension": "",
    "Openness to change": "",
    "Self Reliance": "",
    "Perfectionism": "",
    "Tension": ""
 }

 const m2={
  "Warmth":"",
  "Reasoning": "",
  "Emotional Stability": "",
  "Dominance": "",
  "Liveliness": "",
  "Rule Conciousness": "",
  "Social Boldness": "",
  "Sensitivity": "",
  "Vigilance":"",
  "Abstractedness": "",
  "Privateness": "",
  "Apprehension": "",
  "Openness to change": "",
  "Self Reliance": "",
  "Perfectionism": "",
  "Tension": ""
}

  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Legend,
    Tooltip,
  )

  const handleChange=(e)=>{
    setSName(e.target.value);
  }

  const clicked =()=>{
    let count =0;
    for(let i=1;i<data.length;i++){
      if(data[i].Name===sName){
        setCData(data[i]);
        count=1;
      }
    }
    if(!count){
      setCData({});
      setStr("Name not found");
    }

    for(let i=1;i<data.length;i++){
      for(const keys in data[i] ){
        if(keys!=="Name"){
          m[keys].push(data[i][keys]);
        }
      }
    }
  
    for(const j in m){
      let a=m[j].reduce((s,c)=>s+c,0);
      m1[j]=(a/m[j].length);
      m[j].sort();
      let b=Math.floor(m[j].length/2);
      m2[j]=m[j][b];
    }
    setMean(m1);
    setMedian(m2);
  }

  return (
    <div className="App">
      <div className='form'>
        <Stack direction="row" spacing={0}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
            onChange={handleChange}
          />
          <IconButton aria-label='search' onClick={clicked}>
            <SearchIcon/>
          </IconButton>
        </Stack>
      </div> <br/> <br/>
      {
        cData.Name ? <Graph data={cData} ideal={ideal} mean={mean} median={median}/> : str
      }
    </div>
  );
}

export default App;
