import { useState } from 'react';
import './App.css';
import firebaseInitializeAuthentication from './Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";

firebaseInitializeAuthentication();
const auth = getAuth();

function App() {
  //console.log(auth);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [isLogin,setIsLogin] = useState(false); 
  const toggleLogin = (e) =>{
    setIsLogin(e.target.checked);
  }
  const hanldeLogin = (e)=>{
    e.preventDefault();
    console.log(email,password);
    if(password.length<6){
      setError('password should be at least 6 character long');
      return;
    }
    // if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
    //   setError('password is not strong enough');
    //   return;
    // }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('logged in');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
  });


  }
  const handleRegistration = (e) =>{
    
    e.preventDefault();
    console.log(email,password);
    if(password.length<6){
      setError('password should be at least 6 character long');
      return;
    }
    // if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
    //   setError('password is not strong enough');
    //   return;
    // }
   
    createUserWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
  
      const user = userCredential.user;
      console.log(user);   
     })
     setError('');
    
    
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  return (
    <div className='mx-5'>
    <h1>Please {isLogin?'Login':'Register'}</h1>
    <form onSubmit={isLogin?hanldeLogin : handleRegistration}>
    <div className="row mb-3">
      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3"/>
      </div>
    </div>
    <div className="row mb-3">
      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
      <div className="col-sm-10">
        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3"/>
      </div>
      <div className='text-danger'>{error}</div>
    </div>
    
    <div className="row mb-3">
      <div className="col-sm-10 offset-sm-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" onChange={toggleLogin}/>
          <label className="form-check-label" htmlFor="gridCheck1">
            Already Registered
          </label>
        </div>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">{isLogin?'Login':'Register'}</button>
  </form>
    </div>
  );
}

export default App;
