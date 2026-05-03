"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { router } from "better-auth/api";
import { GrGoogle } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";


const RegisterPage = () => {
    const router = useRouter()



    const onSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log({ name, password, email, image })

        const { data, error } = await authClient.signUp.email({
            name,
            image,
            email,
            password,
        },

        )
        console.log({ data, error })
        if (!error) {
            toast.success("Sign Up Successfully");
            router.push("/")
        } else {
            alert("log in failed")
        }

    }

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        })



    }
    return (

        <div>
            {/* <ToastContainer /> */}


            <Form className="flex w-96 flex-col gap-4 mx-auto p-10 border border-[#00d3bb] rounded-2xl shadow-lg mt-10 " onSubmit={onSubmit} >

                <TextField
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="image"
                    type="url"
                >
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>
                <div className="flex justify-center gap-2">
                    <button className="btn w-full">Register</button>
                </div>
                <p className="text-center">or</p>
                <Button onClick={handleGoogleSignIn} className="w-full"> <GrGoogle></GrGoogle> Sign in with Google</Button>




            </Form>
        </div>



    );
};

export default RegisterPage;