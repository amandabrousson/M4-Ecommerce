import Register from "@/Components/elementos/Login/registerCode.tsx/Register";
import Link from "next/link";

export const UserContainer = () => {
    return (
        <div className="flex flex-col">
            <div className="h-3/4 w-9/12 mx-auto flex flex-col items-center justify-center flex-grow">
                <div className="text-white text-center">
                    <div className="flex flex-col pb-10">
                        <h2 className="text-3xl text-center justify-center sm:mt-10 sm:mb-4">Create new account</h2>
                        <div className="flex justify-center items-center mb-5 space-x-2">
                            <p>Already a member?</p>
                            <Link href={"/User/login"} className="text-blue-500 underline-offset-4 underline">
                                Log In
                            </Link>
                        </div>
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserContainer;
