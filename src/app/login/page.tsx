"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import axios  from "axios"
import {toast} from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })
const [buttonDisabled, setButtonDisabled]=React.useState(false);
const [loading, setLoading] = React.useState(false)
    const onLogin = async () => {
try{
setLoading(true);
const response = await axios.post("/api/users/login", user);
console.log("Login success", response.data);
toast.success("Login successfully");
router.push("/profile");
}catch(error:any){
console.log("Login failed", error.message);
toast.error(error.message);
}finally{
    setLoading(false);
}
    }

    useEffect(() =>{
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    return (
        <div>
            <h1>{loading ? "processing" : "logged in"}</h1>
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
            <button onClick={onLogin}>Login </button>
            <br />
            <br />
            <Link href="/signup">visit signup page</Link>
        </div>
    );
}

