import Switch from "react-switch";
import './Passwordgenerator.css';
import { useState } from "react";
let Passwordgenerator=()=>{
    const [password,setPassword]=useState("");
    const [passwordLength,setPasswordLength]=useState(8);
    const [includeuppercase,setincludeuppercase]=useState(true);
    const [includenumbers,setincludenumbers]=useState(true);
    const [includespecial,setincludespecial]=useState(true);
    const generatePassword=()=>{
        const lowercasechars='abcdefghijklmnopqrstuvwxyz';
        const uppercasechars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers='1234567890';
        const special='!@#$%^&*()';
        let validchars=lowercasechars;
        if(includeuppercase){
            validchars+=uppercasechars;
        }
        if(includenumbers){
            validchars+=numbers;
        }
        if(includespecial){
            validchars+=special;
        }
        let generatedPassword="";
        for(let i=0;i<passwordLength;i++){
            const randomIndex=Math.floor(Math.random()*validchars.length);
            generatedPassword+=validchars.charAt(randomIndex);
        }
        console.log(generatedPassword);
        setPassword(generatedPassword);
    }
    return(
        <>
        
        <h1>Password Generator</h1>
        <div>
            
            <label>Password Length:</label>
            &nbsp;&nbsp;&nbsp;  
            <input value={passwordLength} onChange={(e)=>setPasswordLength(e.target.value)} type="number" />
        </div>
        <div className="option">
            <label > UpperCase:</label>
            
            <Switch checked={includeuppercase} onChange={()=>setincludeuppercase(!includeuppercase)}/>   
        </div>
         <div className="option">
            <label > Numbers:</label>
            <Switch checked={includenumbers} onChange={()=>setincludenumbers(!includenumbers)}/>   
        </div>
         <div className="option">
            <label > Special Characters:</label>
            <Switch  checked={includespecial} onChange={()=>setincludespecial(!includespecial)}/>   
        </div>
        <button onClick={generatePassword}> Generate Password</button>
        <h2>{password}</h2>
        </>
    )
}
export default Passwordgenerator;