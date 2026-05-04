"use client"
import { UpdateUserProfile } from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const MyProfile = () => {

    const {
        data: session, } = authClient.useSession()
    const user = session?.user

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="px-3 sm:px-6">
            <Card className="flex flex-col items-center bg-transparent mt-6 sm:mt-9 border-l-4 sm:border-l-5 border-r-4 sm:border-r-5 border-[#c6a8ff] max-w-full sm:max-w-md mx-auto shadow-2xl p-4 sm:p-6">

                <Avatar className="h-16 w-16 sm:h-20 sm:w-20 border-2 sm:border-3 border-[#c6a8ff]">
                    <Avatar.Image
                        alt="User Image"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>
                        {user?.name.charAt(0)}
                    </Avatar.Fallback>
                </Avatar>

                <h1 className="font-bold text-lg sm:text-xl mt-3 text-center">
                    {user?.name}
                </h1>

                <p className="text-sm sm:text-base text-center break-all">
                    {user?.email}
                </p>

                <div className="w-full mt-4">
                    <UpdateUserProfile />
                </div>

            </Card>
        </div>
    );
};

export default MyProfile;