import React, { useState, useEffect } from 'react';
import "./App.css"
import { useLocation } from 'react-router-dom';

const EditContact = () => {
  const location = useLocation();
  const { contacts, updateContacts } = location.state; // Destructure contacts and updateContacts from location.state

  const contactToEdit = contacts[0]; // Assuming contacts is an array of contacts

  const [data, setData] = useState(contactToEdit);

  useEffect(() => {
    setData(contactToEdit);
  }, [contactToEdit]);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!data.fname || !data.lname || !data.email || !data.phone || !data.address) {
      alert("All fields are required!");
      return;
    }

    // Call the updateContacts function passed from the parent component
    updateContacts(data);
  };

  return (
    <div>
      <span>First Name</span>
      <input type="text" id="fname" name="fname" value={data.fname} required onChange={inputChange}></input>
      <br></br>
      <span>Last Name</span>
      <input type="text" id="lname" name="lname" value={data.lname} required onChange={inputChange}></input>
      <br></br>
      <span>Email</span>
      <input type="email" id="email" name="email" value={data.email} required onChange={inputChange}></input>
      <br></br>
      <span>Phone</span>
      <input type="tel" id="phone" name="phone" value={data.phone} required onChange={inputChange}></input>
      <br></br>
      <span>Address</span>
      <input type="text" id="address" name="address" value={data.address} required onChange={inputChange}></input>
      <br></br>
      <button onClick={submit}>Save</button>
    </div>
  );
};

export default EditContact;
