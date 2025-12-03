import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Navbar from "@/components/FrontPorch/Navbar";
import Footer from "@/components/FrontPorch/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "@/assets/signin_bg.jpg";

import { signupSchema, type SignupSchema } from "@/schemas/SignupSchema";
import { useSignup } from "@/hooks/UseSignup";

export default function Signup() {
    const { handleSignup, loading } = useSignup();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (values: SignupSchema) => {
        const { success, error } = await handleSignup(values);

        if (!success) {
        console.error(error);
        return;
        }

        console.log("Registered successfully");
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
        <Navbar />

        <main className="flex justify-center items-center flex-1 py-12 px-4">
            <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 flex flex-col lg:flex-row">

            <div
                className="hidden lg:block w-10/12 bg-cover">
                <img src={Image} alt="background image sign in" className="h-full w-full object-cover object-center dark:not-odd:not-last:"></img>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-7/12 p-10 bg-white dark:bg-gray-800">
                <h3 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
                Create an Account
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div>
                    <Label
                    htmlFor="username"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                    Username
                    </Label>
                    <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="mt-2 w-full px-4 py-2 border rounded-lg dark:text-white bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none"
                    {...register("username")}
                    />
                    {errors.username && (
                        <p className="text-red-500 text-sm">{errors.username.message}</p>
                    )}
                </div>

                <div>
                    <Label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                    Email
                    </Label>
                    <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="mt-2 w-full px-4 py-2 border rounded-lg dark:text-white bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none"
                    {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                    <Label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="********"
                        className="mt-2 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none"
                        {...register("password")}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm">{errors.password.message}</p>
                    )}
                    </div>

                    <div>
                    <Label
                        htmlFor="c_password"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
                    >
                        Confirm Password
                    </Label>
                    <Input
                        id="c_password"
                        type="password"
                        placeholder="********"
                        className="mt-2 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 focus:ring focus:ring-blue-300 focus:outline-none"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                    )}
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full py-3 font-semibold text-white hover:bg-blue-700 rounded-lg shadow-md transition"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register Account"}
                </Button>

                <div className="pt-4 border-t border-gray-300 dark:border-gray-600 text-center space-y-2">
                    <a
                    href="#"
                    className=" hover:text-blue-800 text-sm dark:text-blue-400"
                    >
                    Forgot Password?
                    </a>

                    <div>
                    <a
                        href="/login"
                        className=" hover:text-blue-800 text-sm dark:text-blue-400"
                    >
                        Already have an account? Login!
                    </a>
                    </div>
                </div>

                </form>
            </div>
            </div>
        </main>

        <Footer />
        </div>
    );
}
