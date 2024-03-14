import React  from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AddContact from './AddContact';

const CreateContact = ({contacts,updateContacts,id,setId}) =>
{
    return <Link><AddContact contacts={contacts} updateContacts={updateContacts} id={id} setId={setId}/></Link>
}
export default CreateContact
