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

    return (
        <Form
            className="flex w-full max-w-sm sm:max-w-md flex-col gap-4 mx-auto p-5 sm:p-8 md:p-10 border-2 border-[#0f3156] rounded-2xl shadow-lg mt-6 sm:mt-10"
            onSubmit={onSubmit}
        >

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
                <Input className="w-full" placeholder="john@example.com" />
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
                <Input className="w-full" placeholder="Enter your password" />
                <Description>
                    Must be at least 8 characters with 1 uppercase and 1 number
                </Description>
                <FieldError />
            </TextField>

            <Button type="submit" className="bg-[#0f3156] w-full text-white">
                LogIn
            </Button>

        </Form>
    );
};

export default LoginPage;