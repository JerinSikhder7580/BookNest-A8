import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
import booksData from "../../public/booksData/books.json";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {

    return (
        <div>
            <div className="min-h-180 bg-cover bg-center "
                style={{ backgroundImage: "url('/Banner.jpeg')" }}>
                <div className="px-9 py-16 flex ">
                    <div>
                        <h1 className="text-8xl font-bold text-[#0f3156]">Find Your <br /> <span className="text-[#473684]">Next Read</span> </h1>
                        <p className="text-gray-600">Explore a wide collection of books across  genres and discover your next favorite</p>
                        <Link href="/all-books">
                            <button className="btn mt-6 bg-[#473684] text-white">Browse Now <FaArrowRightLong /></button>
                        </Link>
                    </div>

                </div>

            </div>
            <Marquee className="tracking-widest py-5" autoFill="true">
                {
                    booksData?.map(book =>
                        <span className="mr-5" key={book.id}>{book.title}</span>
                       
                    )
                }

            </Marquee>
            <div className="grid grid-cols-4 gap-4  p-6" >
                {
                    booksData.slice(0, 4).map(book =>
                        <div className="mx-auto flex p-4 border-2 shadow  border-[#473684] rounded-2xl justify-between" key={book.id}>
                            <Image className="  object-contain" src={book.image_url}
                                alt="Book"
                                width={200}
                                height={300}
                            />

                            <div className="p-4 space-y-3 flex flex-col">
                                <h1 className="font-bold text-xl"> {book.title}</h1>
                                <span className="primary-text font-bold"> {book.author}</span>
                                <p className="text-gray-500">{book.description}</p>
                                <span className="">{book.category}</span>
                                <p className="font-bold primary-text">{book.available_quantity}</p>
                                <div className="flex-1"></div>
                                <button className="btn primary-bg text-white">View Details <FaArrowRightLong /></button>


                            </div>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default Banner;
