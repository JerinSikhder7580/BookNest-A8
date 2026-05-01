import { IoSearch } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosBrowsers } from "react-icons/io";


const DigitalLibrary = () => {
    return (
        <div className="p-5">
            <div className="space-y-3 py-11">
                <div className="text-center space-y-3">
                    <h1 className="primary-text font-bold text-4xl">How it works</h1>
                    <h1 className="font-semibold text-2xl text-[#0f3156]">Built for a faster digital library rhythm</h1>
                    <p className="text-gray-500">Everything is designed to feel light, clear, and welcoming, from the first search to the final borrow. confirmation</p>
                </div>

                <div className="grid grid-cols-3 gap-3 ">
                    <div className="bg-[#e1deeb] p-9 rounded-2xl border-2 border-[#473684] shadow-2xl">
                        <p className="bg-[#c4b6cf] rounded-xl inline-block p-3">
                            < IoSearch />
                        </p>

                        <h1 className="font-bold text-2xl primary-text">Find your lane</h1>
                        <p className="text-[#0f3156]">Search by title and narrow the shelf by Story Tech, or Scimce in one clean brmesing flow</p>
                    </div>


                    <div className="bg-[#e1deeb] p-9 rounded-2xl border-2 border-[#473684] shadow-2xl">
                        <p className="bg-[#c4b6cf] rounded-xl inline-block p-3">
                            <MdOutlineSecurity />

                        </p>

                        <h1 className="font-bold text-2xl primary-text">Find your lane</h1>
                        <p className="text-[#0f3156]">Search by title and narrow the shelf by Story Tech, or Scimce in one clean brmesing flow</p>
                    </div>


                    <div className="bg-[#e1deeb] p-9 rounded-2xl border-2 border-[#473684] shadow-2xl">
                        <p className="bg-[#c4b6cf] rounded-xl inline-block p-3">
                            <IoIosBrowsers />

                        </p>

                        <h1 className="font-bold text-2xl primary-text">Find your lane</h1>
                        <p className="text-[#0f3156]">Search by title and narrow the shelf by Story Tech, or Scimce in one clean brmesing flow</p>
                    </div>

                    
                </div>
            </div>


        </div>
    );
};

export default DigitalLibrary;