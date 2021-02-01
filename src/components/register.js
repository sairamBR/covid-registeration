import React, {useEffect} from 'react';
import {API} from 'aws-amplify';
import './formstyles.css';
import '../App.css'
import { useHistory } from "react-router-dom";




function Register() {
  const [PersonName, setPersonName] = React.useState('')
  const [PersonAge, setPersonAge] = React.useState('')
  const [PersonDOB, setPersonDOB] = React.useState('')
  const [PersonGender, setPersonGender] = React.useState('')
  const [PersonAddress, setPersonAddress] = React.useState('')
  const [PersonOccupation, setPersonOccupation] = React.useState('')
  const [PersonPhoneNo, setPersonPhoneNo] = React.useState('')
  const [PersonDiabetics, setPersonDiabetics] = React.useState('')
  const [PersonAllergies, setPersonAllgeries] = React.useState('')
  const [PersonAadherNo, setPersonAadherNo] = React.useState('')
  
  useEffect(() => {
    API.get('registerapi', '/register/AadherNo').then(registerapiRes => console.log(registerapiRes))
  },[])

  const handleSubmit = e => {
    e.preventDefault()

    API.post('registerapi','/register', {
      body:{
        AadherNo:PersonAadherNo,
        Name:PersonName,
        DOB:PersonDOB,
        Age:PersonAge,
        Gender:PersonGender,
        Occupation:PersonOccupation,
        Address:PersonAddress,
        PhoneNo:PersonPhoneNo,
        Diabetics:PersonDiabetics,
        Allergies:PersonAllergies
      }
    })
   }

   const history = useHistory();
    const routeChange = () => {
     let path= 'src/App.js';
     history.push(path);
  }


  return (
    <div className="App-header">
      <div className="Form-heading">
        <h1>Covaccine register</h1>
      </div>
     
     <div className="formcontainer">
     <form onSubmit={handleSubmit}>
       <p className="textstyle">AadherNo</p>
       <input value={PersonAadherNo} placeholder="Aadher Number" onChange={(e) => setPersonAadherNo(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Name</p>
       <input value={PersonName} placeholder="Name" onChange={(e) => setPersonName(e.target.value)} className="inputbox"/><br />
       <p className="textstyle">DATE OF BIRTH</p>
       <input value={PersonDOB} placeholder="DOB" onChange={(e) => setPersonDOB(e.target.value)} className="inputbox"/><br />
       <p className="textstyle">Age</p>
       <input value={PersonAge} placeholder="AGE" onChange={(e) => setPersonAge(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Gender</p>
       <input value={PersonGender} placeholder="Gender" onChange={(e) => setPersonGender(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Occupation</p>
       <input value={PersonOccupation} placeholder="Occupation" onChange={(e) => setPersonOccupation(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Address</p>
       <input value={PersonAddress} placeholder="Address" onChange={(e) => setPersonAddress(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Phone Number</p>
       <input value={PersonPhoneNo} placeholder="PhoneNo" onChange={(e) => setPersonPhoneNo(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Diabetics</p>
       <input value={PersonDiabetics} placeholder="Diabetics" onChange={(e) => setPersonDiabetics(e.target.value)} className="inputbox" /><br />
       <p className="textstyle">Allergies</p>
       <input value={PersonAllergies} placeholder="Allergies" onChange={(e) => setPersonAllgeries(e.target.value)} className="inputbox" /><br />
       <button >Submit</button>
     </form> 
     </div> 
    </div>
  );
}

export default Register;