import Image from 'next/image';
import listRoomImage from "@/public/img/list-room-1.jpg";
import listRoomImage2 from "@/public/img/list-room-2.jpg";
import listRoomImage3 from "@/public/img/list-room-3.jpg";
import listRoomImage4 from "@/public/img/list-room-4.jpg";
import listRoomImage5 from "@/public/img/list-room-5.jpg";
import BreadcrumbDemo from '@/components/ui/breadcrumb-demo';

export default function UserDetailRoomImage() {
    const images = [listRoomImage2, listRoomImage3, listRoomImage4, listRoomImage5];
    const isMoreImages = images.length > 3;
    return (
        <>
        <div className="flex-col gap-1 px-4 w-full max-w-screen-xl mx-auto hidden md:flex">
            <BreadcrumbDemo/>
        </div>
        <div className="main-display-image flex flex-col md:flex-row gap-1 md:px-4 w-full md:max-w-screen-xl mx-auto">
            {/* Main Image */}
            <div className="image_xl w-full md:w-[50%] h-[295px]">
                <Image 
                    loading='lazy'
                    src={listRoomImage} 
                    alt="Main Room Image"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Grid of Smaller Images */}
            <div className="flex-1 grid grid-cols-3 md:grid-cols-2 md:grid-rows-2 gap-1">
                {images.slice(0, 3).map((image, index) => (
                    <div 
                        key={index} 
                        className={`relative w-full ${index === 0 ? 'md:col-span-2' : ''} h-[90px] md:h-[145px] overflow-hidden`}
                    >
                        <Image 
                            src={image} 
                            alt={`Room Image ${index + 2}`}
                            loading='lazy'
                        />
                        {isMoreImages && index === 2 && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">Lihat Detail</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}