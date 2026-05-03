import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
import booksData from "../../public/booksData/books.json";
import Link from "next/link";
import Image from "next/image";
import 'animate.css';


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
                            <button className="btn mt-6 bg-[#473684] text-white ">Browse Now <span className="animate__animated animate__shakeX  animate__infinite animate__slow"><FaArrowRightLong /></span> </button>
                        </Link>
                    </div>

                </div>

            </div>
            <Marquee className="tracking-widest py-5" autoFill="true">
                {
                    booksData?.map(book =>
                        <span className="mr-5" key={book.id}>New Arrivals:{book.title}</span>

                    )
                }

            </Marquee>
            <div className="grid grid-cols-2 3xl:grid-cols-4 gap-4  p-6" >
                {
                    booksData.slice(0, 4).map(book =>
                        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2  p-4 border-2 shadow  border-[#473684] rounded-2xl  w-full" key={book.id}>
                            <div className="bg-white lg:bg-transparent rounded-2xl  shadow-[0px_0px_3px_0px] shadow-[#473684] lg:shadow-none py-5 lg:py-0  ">

                                <Image className="  object-contain mx-auto lg:mx-0    " src={book.image_url}
                                    alt="Book"
                                    width={200}
                                    height={300}
                                />
                            </div>

                            <div className="p-4  flex flex-col">
                                <h1 className="font-bold text-xl"> {book.title}</h1>
                                <span className="primary-text font-bold"> {book.author}</span>
                                <p className="text-gray-500 mt-2">{book.description}</p>
                                <span className="mt-2">Category: {book.category}</span>
                                <p className="font-bold primary-text">Available: {book.available_quantity}</p>
                                <div className="flex-1"></div>
                                <Link href={`/bookDetails/${book.id}`}>
                                    <button className="btn primary-bg text-white">View Details <FaArrowRightLong /></button>

                                </Link>


                            </div>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default Banner;
