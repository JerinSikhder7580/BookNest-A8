"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = href === pathname;

    return (
        <Link
            href={href}
            className={`p-1 ${isActive ? "border-b-2 border-b-purple-500 primary-text" : ""}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;