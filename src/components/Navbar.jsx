"use client"
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { IoBookSharp } from "react-icons/io5";
import { Avatar } from "@heroui/react";
import NavLink from "./NavLink";



const Navbar = () => {

    const {
        data: session } = authClient.useSession()

    const user = session?.user

    const handleLogOut = () => {
        authClient.signOut()
    }


    const links = <>

        <li className="font-semibold"><NavLink href="/">Home</NavLink></li>
        <li className="font-semibold"><NavLink href="/all-books">AllBooks</NavLink></li>
        <li className="font-semibold"><NavLink href="/profile">MyProfile</NavLink></li>

    </>


    return (
        <div className="navbar shadow-sm bg-transparent">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0 sm:px-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7  sm:h-5 sm:w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className="btn btn-ghost primary-text text-xl" href="/"> <IoBookSharp /> Book Nest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex gap-4">
                {!user && <ul className="flex items-center gap-4">
                    <li>
                        <Link className="btn primary-bg text-white outline-none" href={"/register"}>Register</Link>
                    </li>
                    <li>
                        <Link className="btn bg-[#0f3156] text-white" href={"/login"}>LogIn</Link>
                    </li>
                </ul>}


                {user && (
                    <div className="flex flex-col xs:flex-row gap-0 xs:gap-4 items-center">
                        {/* <Avatar>
                            <Avatar.Image alt="User Image" src={user?.image}
                                referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>


                        </Avatar> */}
                        <p className="primary-text">{user?.name.toUpperCase()}</p>
                        <Button onClick={handleLogOut} variant="danger">LogOut</Button>

                    </div>

                )


                }



            </div>



        </div>
    );
};

export default Navbar;