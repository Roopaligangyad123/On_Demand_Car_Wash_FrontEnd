import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';

function DeleteWasher() {
const [washer, setWasher] = useState(null)
 const { id } = useParams();
 const fetchWasherById = () => {
 axios.get("http://localhost:8082/washer/viewWasher/"+id).then(resp => setWasher(resp.data))
}
 useEffect(fetchWasherById);
  const deleteWasher = () => {

axios.delete("http://localhost:8082/washer/account/delete" + id).then(resp => {
 alert(resp.data);
 })

}
 return (
 <div>
 <h2>Washer Details</h2>
 {
washer !== null &&
<div >
 <p> ID : {washer.id}</p>
<p> LOCATION : {washer.location}</p>
 <p> NAME : {washer.name}</p>

</div>
 }
 <div><button onClick={deleteWasher}>Delete</button></div>
 </div>
 )
}
export default DeleteWasher;

