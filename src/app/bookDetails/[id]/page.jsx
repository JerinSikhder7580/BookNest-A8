"use client"
import { useParams, useRouter } from 'next/navigation';
import bookData from "../../../../public/booksData/books.json"
import { FaBookOpen } from "react-icons/fa";

import React from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const BookDetails = () => {
    const router = useRouter()

    const { id } = useParams()

    const {
        data: session, } = authClient.useSession()
    const user = session?.user


    const handleBorrow = () => {
        const user = null


        if (!session) {
            toast.error("Please log in first");
            router.push("/login")
        }
        else {
            toast.success("Book Borrowed successfully")
        }


    }



    console.log(id)
    const book = bookData.find(book => book.id == id)

    return (

        <div >
            <ToastContainer />
            <div className='flex justify-center items-center py-10 sm:py-16 lg:py-20 px-3'>
                {
                    <div className='flex flex-col md:flex-row gap-4 border-2 border-[#473684] p-4 sm:p-5 rounded-2xl shadow-2xl w-full max-w-4xl'>

                        <div className='relative aspect-square w-full md:w-1/2'>
                            <Image
                                className="object-cover rounded-xl"
                                src={book.image_url}
                                alt="Book"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className='space-y-2 w-full md:w-1/2'>
                            <h1 className='text-xl sm:text-2xl font-bold text-[#473684]'>
                                {book.title}
                            </h1>

                            <p className='text-lg sm:text-xl font-bold'>
                                {book.author}
                            </p>

                            <p className='font-bold text-sm sm:text-base'>
                                {book.description}
                            </p>

                            <p className='font-bold text-sm sm:text-base'>
                                {book.available_quantity} Copies Left
                            </p>

                            <p className='font-bold text-sm sm:text-base'>
                                {book.category}
                            </p>

                            <button onClick={handleBorrow} className='btn primary-bg text-white mt-3 w-full sm:w-auto flex items-center justify-center gap-2'>
                                Borrow This Book <FaBookOpen />
                            </button>
                        </div>

                    </div>
                }
            </div>
        </div>
    );
};

export default BookDetails;