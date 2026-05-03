"use client"
import { useParams, useRouter } from 'next/navigation';
import bookData from "../../../../public/booksData/books.json"
import { FaBookOpen } from "react-icons/fa";

import React from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const BookDetails = () => {
    const router = useRouter() //  add this

    const { id } = useParams()

    const {
        data: session, } = authClient.useSession()
    const user = session?.user

    if (!user) {
        router.push("/login")
    }
    else {
        toast.success("Book Borrowed successfully")
    }

    console.log(id)
    const book = bookData.find(book => book.id == id)

    return (

        <div >
            <ToastContainer />
            <div className='flex  justify-center items-center py-20'>
                {
                    <div className='flex gap-4 border-2 border-[#473684] p-5 rounded-2xl shadow-2xl'>
                        <div className='relative aspect-square w-full'>

                            <Image className="  object-cover" src={book.image_url}
                                alt="Book"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className='space-y-2'>
                            <h1 className='text-2xl font-bold text-[#473684]'>{book.title}</h1>
                            <p className='text-xl font-bold'>{book.author}</p>
                            <p className=' font-bold'>{book.description}</p>
                            <p className='font-bold'>{book.available_quantity} Copies Left</p>

                            <p className='font-bold '>{book.category}</p>
                            <button className='btn primary-bg text-white'>Borrow This Book <FaBookOpen />
                            </button>
                        </div>
                    </div>

                }

            </div>

        </div>
    );
};

export default BookDetails;