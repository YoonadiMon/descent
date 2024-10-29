import {signInWithGoogle} from './firebase';
import { useState } from 'react';
import scuba_diver from './images/scuba_diver.png';
import logo from './images/logo.png';
const Home = () => {
    const[login,setLogin] = useState(false);
    function click(){
        signInWithGoogle()
        setLogin(true)
        console.log(login)
    }
    return ( 
        <div className="home">
            <h1>Descent</h1>
            <h2>A right step</h2>
            <img src = {logo}  height = '350px' width = '350px'/><br></br>
            <button className = 'signIn' onClick = {click}>Sign up now</button><br></br><br></br>
        </div>
        
     );
     
}
export default Home;