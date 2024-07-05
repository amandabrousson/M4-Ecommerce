import Link from "next/link";
import LoginFormClient from "@/Components/elementos/Login/loginCode.tsx/LoginCont";

export const UserLogIn = () => {
    return (
        <div className="flex flex-col">
            <div className="h-3/4 w-9/12 mx-auto flex flex-col items-center justify-center flex-grow">
                <div className="text-white text-center">
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:mt-10 sm:mb-4">Log In</h2>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="">Not a member?</p>
                            <Link href={"/User"} className="text-blue-500 underline-offset-4 underline">
                                Register
                            </Link>
                        </div>
                        <LoginFormClient />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogIn;
