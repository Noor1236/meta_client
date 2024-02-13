import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/ThemeContext';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null); // Store the image file
  const [status, setStatus] = useState(null);
  const { isAuthenticated, user, login } = useAuth();

  const handleImageChange = (e) => {
    // Set the image file when it changes
    setImage(e.target.files[0]);
  };

  const userData = new FormData();
  userData.append('first_name', firstName);
  userData.append('last_name', lastName);
  userData.append('email', email);
  userData.append('password', password);
  userData.append('image', image); // Append the image file to the FormData

  const UserSignup = () => {
    axios.post('https://server-theta-taupe.vercel.app/create_user', userData)
      .then(function (res) {
        console.log("Get Response", res);
        login(res?.data?.userData);
        setStatus(res?.data?.msg);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="page_width">
        <h2>Sign Up</h2>
        <h2>{status ? status : ''}</h2>
        <div className="emai create_post_input">
          <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="emai create_post_input">
          <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="emai create_post_input">
          <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="emai create_post_input">
          <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="emai create_post_input">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button onClick={UserSignup} > Sign Up </button>
      </div>
    </div>
  );
};

export default SignupPage;
