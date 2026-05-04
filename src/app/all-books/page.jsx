"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CategorySidebar from "@/components/CategorySidebar";

const AllBooks = () => {
    const [booksData, setBooksData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await fetch("https://book-nest-a8.vercel.app/booksData/books.json"

                );
                const data = await res.json();
                setBooksData(data);
            } catch (error) {
                console.error("Failed to fetch books:", error);
            }
        };

        fetchBooks();
    }, []);

    const filteredBooks = booksData.filter((book) => {
        const matchCategory =
            selectedCategory === "All" ||
            book.category === selectedCategory;

        const matchSearch = book.title
            .toLowerCase()
            .includes(searchText.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="mt-6 sm:mt-10 px-3 sm:px-5">
            <section>

                {/* SEARCH */}
                <div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full"
                    >
                        <label className="input border-none flex-1 shadow-sm">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search books..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="w-full"
                            />
                        </label>

                        <button className="btn primary-bg text-white w-full sm:w-auto">
                            <Search size={18} /> Search
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-3 sm:p-4 rounded-xl shadow-sm mt-5 gap-3">
                    <div>
                        <h1 className="primary-text text-xs sm:text-sm font-bold tracking-wider">
                            DIGITAL SHELF
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2">
                            {`${filteredBooks.length} books ready to explore`}
                        </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500">
                        Filter books using the left sidebar (Story, Tech, Science).
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 mt-5">

                    <CategorySidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <div
                                    className="border-2 border-[#473684] rounded-2xl shadow-2xl p-4 sm:p-5"
                                    key={book.id}
                                >
                                    <div className="relative aspect-square w-full">
                                        <Image
                                            className="object-cover rounded-xl"
                                            src={book.image_url}
                                            alt="Book"
                                            fill
                                        />
                                    </div>

                                    <div className="flex justify-between mt-3 primary-text font-semibold text-sm sm:text-base">
                                        <h1>{book.title}</h1>
                                        <h1>{book.category}</h1>
                                    </div>

                                    <Link href={`/bookDetails/${book.id}`}>
                                        <button className="btn primary-bg text-white w-full mt-3 flex items-center justify-center gap-2">
                                            View Details <ArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500 text-sm sm:text-base">
                                No books found
                            </p>
                        )}
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AllBooks;