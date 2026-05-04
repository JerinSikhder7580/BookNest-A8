import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-10 sm:mt-16 bg-gradient-to-b from-[#e4e1ed] via-[#f1ebf5] to-[#c2b3d0] text-[#1f1830]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">

                <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                    <div className="text-center sm:text-left">
                        <h2 className="text-xl sm:text-2xl font-bold">BookNest</h2>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-[#3d334d] mx-auto sm:mx-0">
                            Discover stories, ideas, and resources that make every reading moment better.
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-semibold">Social Links</h3>
                        <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                            <a className="rounded-full bg-white/65 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm transition hover:bg-white hover:text-[#473684]" href="#">Facebook</a>
                            <a className="rounded-full bg-white/65 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm transition hover:bg-white hover:text-[#473684]" href="#">Instagram</a>
                            <a className="rounded-full bg-white/65 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-sm transition hover:bg-white hover:text-[#473684]" href="#">Twitter</a>
                        </div>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-base sm:text-lg font-semibold">Contact Us</h3>
                        <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#3d334d]">
                            <p>Email: support@booknest.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Address: Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 sm:mt-10 border-t border-white/40 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-[#3d334d]">
                    <p>&copy; 2026 BookNest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;