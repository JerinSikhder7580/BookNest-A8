"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { IoBookSharp } from "react-icons/io5";


const Navbar = () => {

    const {
        data: session, } = authClient.useSession()

    const user = session?.user

    const handleLogOut = () => {
        authClient.signOut()
    }


    const links = <>

        <li><Link href="/">Home</Link></li>
        <li><Link href="all-books">AllBooks</Link></li>
        <li><Link href="my-profile">MyProfile</Link></li>

    </>


    return (
        <div className="navbar shadow-sm bg-transparent">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl" href="/"> <IoBookSharp /> Book Nest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href={"/signup"}>SignUp</Link>
                    </li>
                    <li>
                        <Link href={"/signin"}>SignIn</Link>
                    </li>
                </ul>
            </div>
            <div className="text-sm text-gray-500">
                {user?.name}
            </div>


            <Button onClick={handleLogOut} variant="danger">LogOut</Button>
        </div>
    );
};

export default Navbar;