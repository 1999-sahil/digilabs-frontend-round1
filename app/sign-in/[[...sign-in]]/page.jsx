import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page () {
    return (
        <div className="flex items-center justify-center my-[60px] gap-10">
            <div className="flex flex-col items-center justify-center">
                <Image src='/digilabs.png' alt='logo' width={100} height={100} />
                <h2 className="font-manrope font-bold text-[20px] text-center">Signin to your account to visit <br />DigiLabs Dashboard</h2>
            </div>
            <SignIn />
        </div>
    )
}