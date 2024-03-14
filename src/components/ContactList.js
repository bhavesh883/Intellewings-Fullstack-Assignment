import React from "react";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const ContactList = ({contacts,updateContacts,search,handleDelete,handleUpdate}) =>
{

    const filterContacts = contacts.filter((item)=>
    { 
        const re = item.fname+" "+item.lname
        const newItem = re.slice(0,search.length)
        return newItem.toLowerCase()==search.toLowerCase()
    })
    return(<div class="facecard">
        
        <table className="contact-table">
      <thead>
        <tr>
         
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filterContacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>{contact.fname+' '+contact.lname }</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.address}</td>
            <td> <FontAwesomeIcon  className="edit" icon={faEdit} onClick={()=>{handleUpdate(contact.id)}}/></td>
            <td> <FontAwesomeIcon  className="trash" icon={faTrash} onClick={()=>handleDelete(contact.id)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
       
    </div>)
}

export default ContactList 