import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/frontPorch/Navbar"
import Footer from "@/components/frontPorch/Footer"
import Logo from "@/assets/PosterBoi_Logo.png"

import { loginSchema, type LoginSchema } from "@/schemas/LoginSchema";
import { useLogin } from "@/hooks/UseLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { handleLogin, loading } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (values: LoginSchema) => {
    const { success, error } = await handleLogin(values);

    if(!success) {
      alert(error);
      return;
    }

    navigate("/dashboard", { replace: true})
    console.log("Logged in successfully");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1 min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={Logo} alt="Your Company" className="mx-auto h-20 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Sign in to your account</h2>
        </div>

        <div onSubmit={handleSubmit(onSubmit)} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label htmlFor="email" className="block text-sm/6 font-medium text-black-100">Email address</Label>
              <div className="mt-2">
                <Input id="email" type="email" placeholder="Email" required autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" {...register("email")}/>
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="block text-sm/6 font-medium text-black-100">Password</Label>
                <div className="text-sm">
                  <a href="#" className="font-semibold hover:text-indigo-300">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
                <Input id="password" type="password" placeholder="Password" required autoComplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" {...register("password")}/>
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
              </div>
            </div>

            <div>
              <Button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Don't have an account?
            <a href="/signup" className="font-semibold text-black hover:text-indigo-300"> Register here!</a>
          </p>
        </div>
      </div>
      < Footer />
    </div>
  )
}
