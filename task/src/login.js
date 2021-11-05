import React , {useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';
import Navbar from "./Navbar"
import { toast } from 'react-toastify';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignIn() {

  const [password,setpassword]=useState("")
  const [username,setusername]=useState("")
  const history = useHistory();
  const classes = useStyles();
 const authenticate=(e)=>{
     const Allowedusers =[{name:"steven",password:"test"}, {name:"peter",password:"123"}]
     let checkusername =username.toLowerCase();
     localStorage.setItem('loggedin',false);
     Allowedusers.map((user)=>{ 
        if(checkusername!="" && checkusername == user.name )
        {
            if(password!="" && password== user.password){ 
                localStorage.setItem('loggedin',JSON.stringify(true))
               
               history.push('/Home') 
              
              
                                  }
        }
      })

if( JSON.parse(localStorage.getItem("loggedin")) ==true){ 
  toast.success("Login Successful")
} 
else {alert ("Invalid username or password please try again")}
     e.preventDefault();
                      }
  return (
    <>
    
   <Navbar>  <div className="mr-4"> <AccountCircleIcon className="mb-1"/> Login Page </div>  </Navbar>  
 
  <br/>
    <Container component="main" maxWidth="xs" className ="shadow-lg px-3 mb-5 bg-light  pb-5" style={{borderRadius:"3em"}}>
      <CssBaseline />
      <div className={`${classes.paper} pt-4`} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            tybe="email"
            label="User Name"
            name="Name"
            autoComplete="email"
            onChange={(e)=>setusername(e.target.value)}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setpassword(e.target.value)}
          />
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={authenticate}
          >
            Sign In
          </Button>
      
           
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    
    </>
  );
}