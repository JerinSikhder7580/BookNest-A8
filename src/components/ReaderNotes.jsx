import { LuQuote } from "react-icons/lu";

const ReaderNotes = () => {
    return (
        <div>
            <div className="p-3 sm:p-5">

                <div className="text-center space-y-3 mb-4 px-2">
                    <h1 className=" font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0f3156]">
                        Reader Notes
                    </h1>

                    <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl primary-text ">
                        A small reading community with big momentum
                    </h1>

                    <p className="text-gray-500 text-sm sm:text-base">
                        This extra section uses Swiper to add motion and personality while keeping the reading experience practical and responsive
                    </p>
                </div>

                {/* ONLY grid + spacing + text responsiveness */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className="primary-bg text-white p-6 sm:p-9 rounded-2xl shadow-2xl">
                        <div className="text-3xl sm:text-4xl lg:text-5xl text-[#c4b6cf]">
                            <LuQuote />
                        </div>

                        <h1 className="text-gray-300 text-sm sm:text-base">
                            The category filter makes the whole platform feel focused.I can jump from fiction to system design books without losing my place
                        </h1>
                    </div>

                    <div className="primary-bg text-white p-6 sm:p-9 rounded-2xl">
                        <div className="text-3xl sm:text-4xl lg:text-5xl text-[#c4b6cf]">
                            <LuQuote />
                        </div>

                        <h1 className="text-gray-300 text-sm sm:text-base">
                            I borrowed a science title  in under a minute.The interface feels clam, modern, and much easier than  a typical library portal.
                        </h1>
                    </div>

                    <div className="primary-bg text-white p-6 sm:p-9 rounded-2xl shadow-2xl">
                        <div className="text-3xl sm:text-4xl lg:text-5xl text-[#c4b6cf]">
                            <LuQuote />
                        </div>

                        <h1 className="text-gray-300 text-sm sm:text-base">
                            The category filter makes the whole platform feel focused.I can jump from fiction to system design books without losing my place
                        </h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ReaderNotes;