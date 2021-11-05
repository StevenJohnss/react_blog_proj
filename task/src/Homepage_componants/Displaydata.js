import React ,{useEffect  , useState} from "react";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import './home.css'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Displaydata = (props)=> {
  const classes = useStyles();
  const [sort, setsort] = React.useState(0);
  const [displaydata, setdisplaydata] = React.useState("");

  const handleChange = (event) => {
    const val=event.target.value;
    setsort(val);
    let mydata=[];
   if( val==1){
    mydata= displaydata.map((d,i)=>  displaydata[(displaydata.length-1 )- i] );
    setdisplaydata([...mydata])
   
   }
    else if (val==0) {
    const mydata= props.data;
    setdisplaydata([...mydata])
   } else {
    const mydata= props.data.filter((f,i)=> f.categorey==val );
    setdisplaydata([...mydata])
   } 
   
  };

  const handelsearch =(e)=>{
    const val=e.target.value;
    const mydata= props.data.filter((f,i)=> f.title.toLowerCase().includes(val.toLowerCase()) || f.tag.toLowerCase().includes(val.toLowerCase()) );
    setdisplaydata([...mydata])
  }  

   const getfiles=(f)=>{
    let html=[];
    for (var i = 0; i <= f.length - 1; i++) {
      if(f[i].name.includes('.png') || f[i].name.includes('.jpg'))
      {
        let link= URL.createObjectURL(f[i]);
        html.push({name:f[i].name, size: f[i].size ,imgurl:link ,  filelink:link  });
      }
      else if(f[i].name.includes('.mp4') || f[i].name.includes('.mp3')){
        let link= URL.createObjectURL(f[i]);
        html.push({name:f[i].name, size: f[i].size , videourl:link ,  filelink:link  });
      }
      
      else {
        let link= URL.createObjectURL(f[i]);
       html.push({name:f[i].name, size: f[i].size  , filelink:link });
      }
    }
    return <>{html.map((a,i)=>  <div key={i}>  
    <div className="row" key={i}>
   
   
    
      <div className="col-md-8">  <h6><a href={a.filelink} target="_blank"> {a.name}</a>  <div  className=" filesize text-danger ">
     {a.size} Kb</div>  </h6> 
      {a.videourl?  <video className="vid" style={{width:"100%",height:"90%"}} controls >
    <source src={a.videourl} type="video/mp4"   />
     </video> :""}
     {a.imgurl? <> <img className="ml-1 Img" src={a.imgurl} style={{width:"100%",height:"90%" }}></img></>:"" } </div> 
    </div> <br/>
    </div>)}</>;
   }
   useEffect(() => {
     setdisplaydata([...props.data])
    console.log("display")
    }, [props]);

return(
    <>
   
    <div className="shadow text-left"    >  
    <div className="row justify-content-between mx-0" style={{backgroundColor:"#C0C0C0"}}>
    <div className="col ">
    <h5 className="pb-0  mt-4" style={{textAlign:""}}>My Blog Posts:  {displaydata !="" ?
    displaydata.length:"0"} </h5>
    </div>
   
   <div  className={`${classes.root} col-auto `}>
   <TextField
          onChange={handelsearch}
          label="Title or Tag.."
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
          }}
        />
         </div>
    <div className="col-auto ">
   
     <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" style={{fontSize:"20px" ,fontWeight:"bold"}}>Sort By:</InputLabel>
        <Select
        
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          value={sort}
          onChange={handleChange}
          
        >
          <MenuItem  value={0}>Normal</MenuItem>
           <MenuItem  value={1}>Recent posts</MenuItem>
          <MenuItem  value={"Educational"}>Educational</MenuItem>
          <MenuItem  value={"Entertainment"}>Entertainment</MenuItem>  
         
        </Select> 
        </FormControl>
        </div> 
    
  </div>
 
    <div style={{overflowY:"auto" ,maxHeight:"89vh"}}>
   {displaydata !="" ? <h1>{displaydata.map((post,i)=> <div  key={i}>


<div id="accordion" style={{textAlign:"left"}} >
  <div className="card">
    <div className="card-header pl-3" id="headingOne" style={{backgroundColor:"#DCDCDC"}}>
     <div className="row">
       <div className="col">
      <h5 className="mb-0 ">
        <button className="btn btn-link pl-0" data-toggle="collapse" data-target= {`#collapseOne${i}`} aria-expanded="true" aria-controls="collapseOne" style={{color:"black"}}>
       <h3>  {post.title}<ArrowDropDownIcon/> </h3>
        </button>
      </h5>
      <div style={{fontSize:"18px",fontWeight:"normal",color:"#2c87f0"}}>{post.tag}</div>
      </div>
      <div className="col-auto mt-3" style={{fontSize:"18px",fontWeight:"normal", color:"#228B22"}}>
        {post.categorey}
        </div>
      </div>
    </div>

    <div id={`collapseOne${i}`} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-body" style={{fontSize:"18px" ,fontWeight:"normal"}}>
       {post.body !=""? post.body:""}

        <br/> <br/><br/>
        {post.filearr !=""?  <h5 style={{textDecoration:"underline"}}>Uploaded file details:</h5> :""}
       {post.filearr !=""?  getfiles(post.filearr)
       
              :""}
      </div>
    </div>
  </div>

</div>
<br/>
</div >

)}</h1>
 :""} 


</div>
</div>
</>
)
};


export default Displaydata;