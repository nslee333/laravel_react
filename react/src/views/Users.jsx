import { useState, useEffect } from "react";
import axiosClient from "../axios-client";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    setLoading(true);

    axiosClient.get(`${import.meta.env.VITE_API_BASE_URL}/api/users`)
      .then(({data}) => {
        setLoading(false);
        console.log(data);
      })
      .catch(() => {
        setLoading(false);
      })
  }


  return (
    <div>

    </div>
  )
}