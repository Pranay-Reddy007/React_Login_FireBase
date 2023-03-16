import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Axios from 'axios'
import { useState } from "react";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);

    }
    
  };
  const [joke,setJoke]=useState("")
const getjoke= () =>{
  Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
    setJoke(response.data.setup+'....'+response.data.punchline)
  })
}
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        {joke}
        <Button onClick={getjoke}>get joke</Button>
      </div>
    </>
  );
};

export default Home;