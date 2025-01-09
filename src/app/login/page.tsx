"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios"


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })

    const onLogin = async () => {

    }
    return (
        <div>
            <h1>Login page :3</h1>
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
            <Link href="/signup"> visit signup page</Link>
        </div>
    );
}