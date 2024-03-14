import React, { useState } from "react";

const AddContact = ({ contacts, updateContacts, id, setId }) => {
  const [data, setData] = useState({
    id: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

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

    const newContact = {
      id: id,
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      phone: data.phone,
      address: data.address,
    };
    console.log(id)

    const updatedContacts = [...contacts, newContact].sort((a, b) => a.fname.localeCompare(b.fname));
    updateContacts(updatedContacts);

    setId(id + 1);
  
    setData({
      id: 0,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div style={{marginTop:"30px"}}>
<div class="AddForm">
  <table>
    <tbody>
      <tr>
        <td>
          <span style={{  fontSize: "30px", fontWeight: "bolder" }}>First Name</span>
        </td>
        <td>
          <input type="text" id="fname" name="fname" value={data.fname} required onChange={inputChange} />
        </td>
      </tr>
      <tr>
        <td>
          <span style={{  fontSize: "30px", fontWeight: "bolder" }}>Last Name</span>
        </td>
        <td>
          <input type="text" id="lname" name="lname" value={data.lname} required onChange={inputChange} />
        </td>
      </tr>
      <tr>
        <td>
          <span style={{ fontSize: "30px", fontWeight: "bolder" }}>Email</span>
        </td>
        <td>
          <input type="email" id="email" name="email" value={data.email} required onChange={inputChange} />
        </td>
      </tr>
      <tr>
        <td>
          <span style={{ fontSize: "30px", fontWeight: "bolder" }}>Phone</span>
        </td>
        <td>
          <input type="tel" id="phone" name="phone" value={data.phone} required onChange={inputChange} />
        </td>
      </tr>
      <tr>
        <td>
          <span style={{fontSize: "30px", fontWeight: "bolder" }}>Address</span>
        </td>
        <td>
          <input type="text" id="address" name="address" value={data.address} required onChange={inputChange} />
        </td>
      </tr>
    </tbody>
  </table>
</div>


      <button onClick={submit}>Save</button>
    </div>
  );
};

export default AddContact;
