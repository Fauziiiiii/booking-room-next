import Image from "next/image";
import meetRoom1 from "@/public/img/list-room-4.jpg";

export default function SignInLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex">
      {/* Bagian Kiri - Form Sign In */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white px-6 py-12 sm:px-12">
        {children}
      </div>
      {/* Bagian Kanan - Image */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src={meetRoom1}
          alt="SignIn Image"
          priority
          className="absolute inset-0 w-full h-full z-0"
        />
        <div className="absolute inset-0 bg-teal-600/80 z-10 flex items-center justify-center">
          <div className="max-w-md text-center px-6 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Find Your Meeting Experience!
            </h2>
            <p className="text-base lg:text-lg mb-8 leading-relaxed">
            Book meeting rooms quickly and efficiently, without any hassle. Experience a more organized and productive meeting environment with your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}