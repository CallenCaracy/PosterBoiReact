import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/layout/Navbar"
import Footer from "@/layout/Footer"

const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data)
    // TODO: Call your API: /api/auth/login
  }

  return (
    <>
    <Navbar />
        <main className="flex justify-center bg-indigo-50 min-h-[calc(92vh-96px)] py-12">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full h-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login to PosterBoi</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register("email")} />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
                </div>

                <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
                </div>

                <Button type="submit" className="mt-4">
                Login
                </Button>
            </form>
            </div>
        </main>
    <Footer />
    </>
  )
}