"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast";


export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
    
        try{
             setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("signup success", response.data);
            router.push("/login")
        }catch(error:any){
            console.log("signup failed", error.message);

            toast.error(error.message)
        }
    }
    
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div>
            <h1>{loading ? "processing" : "signup"}</h1>
            <label htmlFor="username">username</label>
            <input type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({
                    ...user, username:
                        e.target.value
                })}
                placeholder="username" />
            <br /><br />
            <label htmlFor="email">email</label>
            <input type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({
                    ...user, email:
                        e.target.value
                })}
                placeholder="email" />
            <br /><br />
            <label htmlFor="password">password</label>
            <input type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({
                    ...user, password:
                        e.target.value
                })}
                placeholder="password" />
            <br /> <br />
            <button onClick={onSignup}>{buttonDisabled ? "No signup" : "signup"} </button>
            <br /><br />
            <Link href="/login">already have an account? visit login page</Link>
        </div>
    );
}