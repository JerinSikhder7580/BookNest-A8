"use client";

import React, { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import booksData from "../../../public/booksData/books.json";
import Image from "next/image";
import Link from "next/link";
import CategorySidebar from "@/components/CategorySidebar";

const AllBooks = () => {
    // Category state
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Search state
    const [searchText, setSearchText] = useState("");

    // Filter logic (category + search)
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
        <div className="mt-10">
            <section>

                {/* Search */}
                <div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex gap-2 items-center w-full"
                    >
                        <label className="input border-none flex-1 shadow-sm">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Search books..."
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </label>
                        <button className="btn btn-primary">
                            <Search size={18} /> Search
                        </button>
                    </form>
                </div>

                <div className="grid grid-cols-2 bg-white p-3 rounded-xl shadow-sm mt-5">
                    <div>
                        <h1 className="primary-text text-sm font-bold tracking-wider">
                            DIGITAL SHELF
                        </h1>
                        <h2 className="text-3xl font-bold mt-2">
                            {`${filteredBooks.length} books ready to explore`}
                        </h2>
                    </div>
                    <p className="text-sm text-gray-500">
                        Filter books using the left sidebar (Story, Tech, Science).
                    </p>
                </div>

                {/* Layout */}
                <div className="flex gap-5 mt-5">

                    {/* Sidebar Component */}
                    <CategorySidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                    {/* Books */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <div
                                    className="border-2 border-[#473684] rounded-2xl shadow-2xl p-5"
                                    key={book.id}
                                >
                                    <div className="relative aspect-square w-full">
                                        <Image
                                            className="object-cover"
                                            src={book.image_url}
                                            alt="Book"
                                            fill
                                        />
                                    </div>

                                    <div className="flex justify-between mt-3 primary-text font-semibold">
                                        <h1>{book.title}</h1>
                                        <h1>{book.category}</h1>
                                    </div>

                                    <Link href={`/bookDetails/${book.id}`}>
                                        <button className="btn primary-bg text-white w-full mt-3">
                                            View Details <ArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">
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