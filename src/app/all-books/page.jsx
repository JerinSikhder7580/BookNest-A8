"use client"
import React from 'react';
import { ArrowRight, Search } from "lucide-react";
import booksData from "../../../public/booksData/books.json";
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';


const AllBooks = ({ params }) => {

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


                <div className="grid grid-cols-4 gap-5 my-5">
                    {
                        booksData.map(book =>
                            <div className='border-2 border-[#473684] rounded-2xl shadow-2xl p-5' key={book.id}>

                               
                                <div className='relative aspect-square w-full'>

                                    <Image className="  object-cover" src={book.image_url}
                                        alt="Book"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                    // width={200}
                                    // height={300}
                                    />
                                </div>
                                <div className='flex justify-between space-y-2 primary-text font-semibold'>
                                    <h1>{book.title}</h1>
                                    <h1>{book.category}</h1>
                                </div>

                                <Link href={`/bookDetails/${book.id}`}>
                                    <button className='btn primary-bg text-white w-full'> View Details <ArrowRight></ArrowRight></button>
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