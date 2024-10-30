import Link from "next/link";
import StyledInput from "../ui/form/input";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    return (
        <>
            <div className="max-w-sm m-auto h-screen flex items-center px-10 sm:px-0">

                <div className="flex flex-col justify-center items-center gap-5 w-full">
                    <h1 className="text-4xl font-semibold tracking-tight flex items-center">Welcome to Welody</h1>
                    <form className="items-center flex flex-col gap-5 w-full text-mine-300">
                        <StyledInput label="Email" name="email" type="email" placeholder="Email" />
                        <StyledInput label="Password" name="password" type="password" placeholder="Password" />
                        <button type="submit" className="bg-mine-950 hover:bg-mine-900 text-mine-50 rounded-full p-3 w-full">Sign in</button>
                    </form>
                    <div className="relative flex items-center w-full">
                        <div className="flex-grow border-t border-mine-400"></div>
                        <span className="flex-shrink mx-4 text-mine-400">or</span>
                        <div className="flex-grow border-t border-mine-400"></div>
                    </div>
                    <button className="bg-mine-950 hover:bg-mine-500 text-mine-50 rounded-full text-sm pr-4 pl-1 py-1">
                        {/* <FaGoogle className="absolute -inset-x-6 -inset-y-0 rounded-full p-4" /> */}
                        <svg className="w-8 h-8 bg-mine-50 rounded-full p-2 inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                            <path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4" />
                            <path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853" />
                            <path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04" />
                            <path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335" />
                        </svg>

                        Sign in with Google
                    </button>
                    <h2 className="text-sm text-mine-600 dark:text-mine-200">Don't have an account? <Link href="/signup" className="text-mine-700 dark:text-mine-50 hover:text-mine-950 hover:dark:text-mine-100 underline underline-offset-2">Sign up here</Link> </h2>

                </div>
            </div>
        </>
    );
}