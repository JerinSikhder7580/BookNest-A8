"use client"

import { UpdateUserProfile } from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const MyProfile = () => {

    const {
        data: session, } = authClient.useSession()
    const user = session?.user
    console.log(user)

    return (
        <div >
            <Card className=" flex flex-col items-center bg-transparent mt-9 border-l-5 border-r-5 border-[#c6a8ff] max-w-96 mx-auto shadow-2xl">
                <Avatar className="h-20 w-20 border-3 border-[#c6a8ff]">
                    <Avatar.Image alt="User Image" src={user?.image}
                        referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>


                </Avatar>
                <h1 className="font-bold text-xl">{ user?.name}</h1>
                <p>{user?.email}</p>
                <UpdateUserProfile></UpdateUserProfile>
            </Card>
        </div>
    );
};

export default MyProfile;