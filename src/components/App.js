import React from "react";
import "./App.css";
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import SignOut from "./SignOut.js";
import ContactList from "./ContactList.js";
import SignIn from "./SignIn.js";
import Auth from "./Auth.js";
import CreateAccount from "./CreateAccount.js";
import Search from "./Search.js";
import CreateContact from "./CreateContact.js";
import { useState } from "react";
import { Link } from "react-router-dom";
const App = () => {
  const [contacts, updateContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [dis, setDis] = useState(1);
  const [id, setId] = useState(1);

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
  const display = () => {
    if (dis) document.getElementById("hide").classList.remove("hide");
    else document.getElementById("hide").classList.add("hide");

    setDis(!dis);
  };
  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((i)=>i.id!==index)
    updateContacts(updatedContacts)
  };
  const handleUpdate =(index)=>
  {
    document.getElementById("blur").classList.add("blur")
    document.getElementById("editPage").classList.remove("hide1")
    const contact = contacts.filter((i)=>i.id===index)
    setData(...contact)
  }
  const saveUpdate = ()=>
  {
    if (!data.fname || !data.lname || !data.email || !data.phone || !data.address) {
      alert("All fields are required!");
      return;
    }

    const updatedContacts = contacts.map((i)=>{
        if(i.id===data.id)
          {
            return data
          }
          else return i;

        
    })
    updatedContacts.sort((a, b) => a.fname.localeCompare(b.fname));
    updateContacts(updatedContacts)
    document.getElementById("editPage").classList.add("hide1")
    document.getElementById("blur").classList.remove("blur")
  }

  return (
    <>
    <div id="blur">
      <Header />
      <SignOut />
      <div class="contactList">
        <Search setSearch={setSearch} hide={display} />
        <div id="hide" class="hide">
          <AddContact
            contacts={contacts}
            updateContacts={updateContacts}
            id={id}
            setId={setId}
          />
        </div>
        <h1>Contact List</h1>
        <ContactList
          contacts={contacts}
          updateContacts={updateContacts}
          search={search}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />{" "}
      </div>
      
    </div>
     <div id="editPage" class="editPage hide1">
     <div class="AddForm">
     <table style={{marginTop:"30px"}}>
<tbody>
 <tr>
   <td>
     <span>First Name</span>
   </td>
   <td>
     <input
       type="text"
       id="fname"
       name="fname"
       value={data.fname}
       required
       onChange={inputChange}
     />
   </td>
 </tr>
 <tr>
   <td>
     <span>Last Name</span>
   </td>
   <td>
     <input
       type="text"
       id="lname"
       name="lname"
       value={data.lname}
       required
       onChange={inputChange}
     />
   </td>
 </tr>
 <tr>
   <td>
     <span>Email</span>
   </td>
   <td>
     <input
       type="email"
       id="email"
       name="email"
       value={data.email}
       required
       onChange={inputChange}
     />
   </td>
 </tr>
 <tr>
   <td>
     <span>Phone</span>
   </td>
   <td>
     <input
       type="tel"
       id="phone"
       name="phone"
       value={data.phone}
       required
       onChange={inputChange}
     />
   </td>
 </tr>
 <tr>
   <td>
     <span>Address</span>
   </td>
   <td>
     <input
       type="text"
       id="address"
       name="address"
       value={data.address}
       required
       onChange={inputChange}
     />
   </td>
 </tr>
</tbody>
</table>

       </div>      
       <button onClick={saveUpdate}>Save</button>
     </div>
     </>
  );
};

export default App;
