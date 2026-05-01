"use client"
import React from 'react';
import { ArrowRight, Search } from "lucide-react";
import booksData from "../../../public/booksData/books.json";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';


const AllBooks = () => {

    const [books, setBooks] = useState(booksData)


    return (
        <div className="mt-10">
            <section>
                <div>


                    <form className="flex gap-2 items-center w-full">
                        <label className="input border-none flex-1 shadow-sm">
                            <Search size={18} />
                            <input className="" type="text" />
                        </label>
                        <button className="btn btn-primary"><Search size={18} /> Search</button>
                    </form>
                </div>
                <div className=" grid grid-cols-2 bg-white p-3 rounded-xl shadow-sm mt-5">
                    <div>
                        <h1 className="primary-text text-sm font-bold tracking-wider">DIGITAL SHELF</h1>
                        <h2 className="text-3xl font-bold mt-2">{`${books.length} books ready to explore`}</h2>
                    </div>
                    <p className="text-sm text-gray-500">
                        Search for a title instantly or filter the collection from the left sidebar by Story, Tech and Science.
                    </p>
                </div>


                <div className="grid grid-cols-4 gap-5">
                    {
                        booksData.map(book =>
                            <div key={book.id}>

                                <div className="h-83.75 w-83.75 overflow-hidden rounded-t-2xl" >
                                    <Image className="" src={book.image_url} alt="BookImage"
                                        height={335}
                                        width={335} />

                                </div>
                                <h1>{book.title}</h1>
                                <Link href={`/bookDetails/${book.id}`}>
                                    <button className='btn primary-bg text-white'> View Details <ArrowRight></ArrowRight></button>
                                </Link>
                            </div>
                        )
                    }
                </div>

            </section>
        </div>
    );
};

export default AllBooks;