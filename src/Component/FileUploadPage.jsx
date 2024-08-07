import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkDone } from "react-icons/io5";
import Admin from './Admin';

function FileUploadSingle() {
  const history = useNavigate();
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpValid, setIsOtpValid] = useState(false);
  // const[emailNotVerified , setEmailNotVerified] = useState(false)
  const [isAdmin , setIsAdmin] =useState(false)
  const[isLoadings , setIsLoadings] = useState(false)
  let filename;
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file)
      
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    

    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(file.name)
        filename = `http://localhost:3001/uploads/${file.name}`
        setImageURL(filename);
        console.log(filename)
        console.log(file)
        setIsLoading(false);

        // Navigate to the '/' URL after successful upload
        // history('/', { state: { imageURL: filename, file ,email } });
        history('/quiz', { state: { imageURL: filename, file ,email ,otp } });
        // naviagating to '/' url with two props
        
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };


  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };


  const sendOtp = async () => {
    setIsLoadings(true)
    if (!email) {
      alert("Please provide an email address.");
      setIsLoadings(false)
      return;
      
    }

    try {
      const response = await fetch('http://localhost:9000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
        
      });

      if (response.ok) {
        setIsOtpSent(true);
        // alert("OTP sent to your email.");
        setIsLoadings(false)
      } else {
        alert("Failed to send OTP. Please try again.");
        setIsLoadings(false)
      }
      console.log(email)
    } catch (error) {
      console.error(error);
      alert("Error sending OTP. Please try again.");
      setIsLoadings(false)
    }
  };

  const validateOtp = async () => {
    if (!otp) {
      alert("Please provide OTP.");
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/validate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, otp })
      });

      if (response.ok) {
        setIsOtpValid(true);
        alert("OTP validated successfully.");
        console.log(email)
        console.log(typeof(email))
        if(email ==="lrbrbs100@gmail.com"){
          // history('/quiz', { state: { imageURL: filename, file ,email } });
          setIsAdmin(true)
          // history('/admin')
        }
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error validating OTP. Please try again.");
    }
  };

 const handleAdmin =() =>{
  history('/admin',{state : {otp}});

 }

 const adminAsUser = () =>{
  setIsAdmin(false);
 }



 const handleEmail = (e)=>{
 setEmail(e.target.value)
 console.log(email)
 }



  return (
    <div className='m-5'>
       <form action="">
        <div className='border border-red-900 w-[500px] p-5'>
            {/* <h1 className='text-red-700 font-bold text-xl '>Step 1:</h1> */}
            <p> Email :</p>
            <input type="email" onChange={handleEmail} placeholder='Enter your email here' className='border border-green-800 text-center w-[350px]' disabled={isOtpSent}  required/> <br /> <br />
            {/* <input type="submit" value='submit'/> */}
            <button type="button" onClick={sendOtp} disabled={isOtpSent} className='text-lg bg-teal-700 border border-teal-700 rounded-lg text-white hover:bg-red-700 px-2 spinner 'isLoadings={isLoadings} >Send OTP</button> <br /> <br />
            <span>{isLoadings && <div className="spinner">Sending OTP...</div>}</span> 
            {isOtpSent && (
              <>
                <p className='flex text-slate-400 font-bold'><IoCheckmarkDone className='text-xl font-extrabold text-green-700'/>OTP sent to {email}</p>
                <p>OTP:</p>
                <input type="text" value={otp} onChange={handleOtpChange} disabled={isOtpValid} className='border border-green-800 text-center m-2' placeholder='Enter your OTP here' required />
                <button type="button" onClick={validateOtp} disabled={isOtpValid}  className='text-lg bg-teal-700 border border-teal-700 rounded-lg text-white hover:bg-red-700 px-2'>Validate OTP</button>
              </>
            )}
        
        
            {isOtpValid && !isAdmin &&
            <div>
              <input type="file" onChange={handleFileChange} required/>
              <div>{file && `${file.name} - ${file.type}`}</div> <br /><br />
              <button type="submit"  onClick={handleUploadClick} disabled={isLoading} className='text-lg bg-red-700 border border-teal-700 rounded-lg text-white hover:bg-teal-700 px-2'
                >Submit</button>
              {/* <button type="submit"  onClick={sentEmail} onMouseEnter ={handleUploadClick} disabled={isLoading}>Upload</button> */}
              {isLoading && <div className="spinner">Submitting...</div>}
            </div>
          }
          {isAdmin && 
          <div className='border border-green-800'>
             <button onClick={handleAdmin} className='text-lg bg-red-700 border border-teal-700 rounded-lg text-white hover:bg-teal-700 px-2 m-2'>Proceed to Admin Panel</button>
             <button onClick={adminAsUser} className='text-lg bg-red-700 border border-teal-700 rounded-lg text-white hover:bg-teal-700 px-2 m-2'>Proceed to User Page</button>
          </div>
          }
      </div>
      </form>
    </div>
  );
}

export default FileUploadSingle;
