// import * as React from "react";
// import UserHeader from "./_components/user-header";

// export default function UserRoomLayout({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return (
//         <div className="relative min-h-screen flex flex-col">
//             {/* Header */}
//             <UserHeader/>

//             <div className="w-full h-full bg-slate-50">
//                 {/* <main className="flex flex-col justify-center items-center mx-auto w-full max-w-screen-xl mt-4 mb-8 px-5 bg-slate-500"> */}
//                 <main className="flex flex-col w-full mx-auto mb-4">
//                     {children}
//                 </main>
//             </div>

//             <footer className="py-4 text-center text-sm text-gray-500">
//                 &copy; 2024 UzzCorp. All rights reserved.
//             </footer>
//         </div>
//     );
// }





import * as React from "react";
import UserRoomHeader from "./_components/user-header";

export default function UserRoomLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Header */}
            <UserRoomHeader/>

            {/* Main Content */}
            {children}

            <footer className="py-4 text-center text-sm text-gray-500">
                &copy; 2024 UzzCorp. All rights reserved.
            </footer>
        </div>
    );
}
