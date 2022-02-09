import { useState } from 'react';
import './App.css';
import firebaseInitializeAuthentication from './Firebase/firebase.init';
firebaseInitializeAuthentication();






function App() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleRegistration = (e) =>{
    console.log(email,password);
    e.preventDefault();
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  return (
    <div className='mx-5'>
    <h1>Please Register</h1>
    <form onSubmit={handleRegistration}>
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
    </div>
    
    <div className="row mb-3">
      <div className="col-sm-10 offset-sm-2">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1"/>
          <label className="form-check-label" htmlFor="gridCheck1">
            Example checkbox
          </label>
        </div>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
    </div>
  );
}

export default App;
