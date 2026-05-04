"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Banner = () => {
    const [booksData, setBooksData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/booksData/books.json",{
            cache: "no-store",
        })
            .then(res => res.json())
            .then(data => setBooksData(data));
    }, []);

    return (
        <div>
            {/* HERO SECTION */}
            <div
                className="min-h-125 sm:min-h-150 lg:min-h-175 bg-cover bg-center flex items-center"
                style={{ backgroundImage: "url('/Banner.jpeg')" }}
            >
                <div className="px-4 sm:px-8 lg:px-16 py-10 sm:py-16">
                    <div className="max-w-xl">
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#0f3156] leading-tight">
                            Find Your <br />
                            <span className="text-[#473684]">Next Read</span>
                        </h1>

                        <p className="text-gray-600 mt-4 text-sm sm:text-base">
                            Explore a wide collection of books across genres and discover your next favorite
                        </p>

                        <Link href="/all-books">
                            <button className="btn mt-6 bg-[#473684] text-white flex items-center gap-2">
                                Browse Now
                                <span className="animate__animated animate__shakeX animate__infinite animate__slow">
                                    <FaArrowRightLong />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* MARQUEE */}
            <Marquee className="tracking-widest py-4 text-sm sm:text-base" autoFill={true}>
                {booksData?.map((book) => (
                    <span className="mr-6" key={book.id}>
                        New Arrivals: {book.title}
                    </span>
                ))}
            </Marquee>

            {/* BOOK GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6">
                {booksData.slice(0, 4).map((book) => (
                    <div
                        key={book.id}
                        className="grid grid-cols-1 md:grid-cols-2 p-4 border-2 shadow border-[#473684] rounded-2xl w-full"
                    >
                        {/* IMAGE */}
                        <div className="bg-white md:bg-transparent rounded-2xl shadow md:shadow-none py-4 flex justify-center">
                            <Image
                                className="object-contain"
                                src={book.image_url}
                                alt="Book"
                                width={160}
                                height={240}
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-3 flex flex-col">
                            <h1 className="font-bold text-lg sm:text-xl">{book.title}</h1>

                            <span className="primary-text font-bold text-sm sm:text-base">
                                {book.author}
                            </span>

                            <p className="text-gray-500 mt-2 text-sm line-clamp-3">
                                {book.description}
                            </p>

                            <span className="mt-2 text-sm">
                                Category: {book.category}
                            </span>

                            <p className="font-bold primary-text text-sm">
                                Available: {book.available_quantity}
                            </p>

                            <div className="mt-auto pt-3">
                                <Link href={`/bookDetails/${book.id}`}>
                                    <button className="btn primary-bg text-white w-full flex items-center justify-center gap-2">
                                        View Details <FaArrowRightLong />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;