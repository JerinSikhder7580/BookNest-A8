"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Check, Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

const SignInPage = () => {


    const onSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        })
    }

    const handleGoogleSignIn =async () => {
        await authClient.signIn.social({
            provider:"google"
        })

    }
    return (
        <div>

            <Form className="flex w-96 flex-col gap-4 mx-auto p-10 border border-[#00d3bb] rounded-2xl shadow-lg mt-10 " onSubmit={onSubmit} >

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
                <div className="flex justify-center gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <p className="text-center">or</p>
                <Button onClick={handleGoogleSignIn} className="w-full"> <GrGoogle></GrGoogle> Sign in with Google</Button>




            </Form>
        </div>



    );
};

export default SignInPage;