import React ,{useEffect , useRef , useState} from "react";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import HomeIcon from '@material-ui/icons/Home';
import Navbar from "../Navbar"
import adv1 from '../assets/adv1.jpg'
import adv2 from '../assets/adv2.jpg'
import Displaydata from './Displaydata'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom";
import { toast } from 'react-toastify';
import Unauthorized from "../Unauthorized"
import imgaes from './images'
const  Home =()=> {

    let inputfileref  =useRef();
    let inputitleref  =useRef();
    let inputextref  =useRef();
    let inputtag  =useRef();
    let inputctegory  =useRef();
    let inputctegory2  =useRef();
    const [data , setdata] =useState([]);
    const history = useHistory();
   
    const getinput =(e)=>{
      e.preventDefault()
      const mydata= data.length>0? data : [];
      const obj ={title: inputitleref.current.value , body: inputextref.current.value?inputextref.current.value: "",
                    filearr:inputfileref.current.files.length>0?inputfileref.current.files:"" , categorey: inputctegory.current.checked ==true?inputctegory.current.value :inputctegory2.current.value
                  , tag: inputtag.current.value? inputtag.current.value:""}
      mydata.push(obj);
      setdata([...mydata]);
      toast.info('Your post has been submited successfully');
      
    }

    // const updatedata =(data)=>{
    //   setdata([...data]);
    // }

    return(
    
      <>
      {  JSON.parse(localStorage.getItem("loggedin"))==true? 
    <div style={{backgroundColor:"#fafafa" ,height:"100%" ,minHeight:"100vh"}} >
       <Navbar logout={<a  
       onClick={()=>{history.push('/'); localStorage.removeItem('loggedin'); }} href="#" className="text-white">
       <ExitToAppIcon className="mb-1"/> Logout 
    </a>}> <Link to="/Home" style={{color:"white"}}> <span > <HomeIcon className="mb-2"/> Home Page</span>  </Link> </Navbar>  
       <div className="container-fluid mt-3">
       
 
  
   
       <div className="row">
       <div className="col-2 mx-0 pl-1 pr-0"> <img  src={adv1} style={{width:"100%" ,height:"50vw"}} />
       <div className="Mobimg2"   /></div>
       <div className="col-8 " > 

      
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" style={{backgroundColor:"#24d2f9" ,borderColor:"#24d2f9"}}>
  Add New Post <AddCircleOutlineIcon className="mb-1"/>
</button>


<div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<form  onSubmit={getinput}>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Create New Post</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body mt-1 pt-0">
    
    
       <div className="row m-md-1 py-3 rounded "  style={{textAlign:"left"}}>
         <div className="col-12">  
         <div className="row" > 
     <div className="col-auto 
       py-2   "> 
     <h6 className="m-0 p-0">Choose category:</h6>
     </div>
     <div className="col-auto  m-0  py-2 "> 

     <input type="radio" id="Educational"  name="categorey" required className="ml-0" value="Educational"
    ref={inputctegory}/>
     <label htmlFor="Educational">Educational</label>
  <input type="radio" id="Entertainment"  className="ml-2" name="categorey" value="Entertainment"
    ref={inputctegory2} />
  <label htmlFor="Entertainment">Entertainment</label>
  </div>
     
     
      </div>
      </div>
       <div className="col-12">
       <TextareaAutosize aria-label="title"  style={{width:"78%",minHeight:"50px",borderRadius:"0.3em"}} placeholder="Title" 
         ref={inputitleref} required
         />
         &nbsp;
         <TextareaAutosize aria-label="title"  style={{width:"19.9%",minHeight:"50px",borderRadius:"0.3em"}} placeholder="Tags" 
         ref={inputtag} 
         />
       </div>

       <div className="col-12">
       <TextareaAutosize  ref={inputextref} aria-label="title" style={{width:"100%",minHeight:"100px",borderRadius:"0.3em"}} placeholder=" Post Body " 
      />
       </div>

       <div className="col-12 " style={{overflowX:"auto"}} >
       <input 
        ref={inputfileref}
        type='file'
       
        multiple />
       </div>
      
       </div>
       
      
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="submit"  className="btn btn-primary "
         >Submit Post</button>
      </div>
        
       
      
    </div>
   
  </div>
  </form>
</div>
      
      
      

      
        
        <br/><br/>
      <Displaydata data={data} />

      
   </div>
       <div className="col-2 mx-0 pr-1 pl-0">  <img  src={require('../assets/adv2.jpg')}   style={{width:"100%",height:"50vw"}} /> <div className="Mobimg1"   /></div>
      
  {/* { imgaes.map(({id, src, title, description}) => <img key={id} src={src} title={title} alt={description} />)} */}

       </div>
   </div>
   
    </div>
   : <Unauthorized/>} </>
        )
    
};

export default Home;