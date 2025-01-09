"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios"


export default function SignupPage(){
    const[user,setUser] = React.useState({
        email:"",
        password:"",
        username:""})

        const onSignup = async()=>{

        }
    return(
        <div>        
         <h1>Signup page :3</h1>
         <label htmlFor="username">username</label>
         <input type="text"
          id="username"
          value={user.username}
        onChange={(e)=>setUser({...user,username: 
            e.target.value})}
            placeholder="username"/>
             <br /><br />
            <label htmlFor="email">email</label>
         <input type="text"
          id="email"
          value={user.email}
        onChange={(e)=>setUser({...user,email: 
            e.target.value})}
            placeholder="email"/>
             <br /><br />
            <label htmlFor="password">password</label>
         <input type="password"
          id="password"
          value={user.password}
        onChange={(e)=>setUser({...user,password: 
            e.target.value})}
            placeholder="password"/>
            <br /> <br />
            <button onClick={onSignup}>Signup here </button>
            <br /><br />
            <Link href="/login">already have an account? visit login page</Link>
        </div>
    );
}