"use client"
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const LoginPage = () => {


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
    // const handleGoogleSignUp = async () => {
    //     await authClient.signIn.social({
    //         provider: "google"
    //     })

    // }



    return (
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
            <Button type="submit" className=" primary-bg w-full text-white">LogIn</Button>
            {/* <div className="flex gap-2">
                <Button type="submit">
                    <Check />
                    Submit
                </Button>
                <Button type="reset" variant="secondary">
                    Reset
                </Button>
            </div> */}
            {/* <Button onClick={handleGoogleSignUp} className="w-full"> <GrGoogle></GrGoogle> SignUp with Google</Button> */}

        </Form>
    );
};

export default LoginPage;