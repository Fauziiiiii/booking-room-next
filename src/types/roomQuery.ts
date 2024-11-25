// export type RoomQuery = {
//     id: string,
//     name: string,
//     capacity: number,
//     status: string,
//     floorId: string,
//     floorName: string,
//     buildingId: string,
//     buildingName: string,
//     createdAt: string,
//     updatedAt: string
// }

export type RoomQuery = {
    id: string;
    name: string;
    roomSize: string;
    capacity: number;
    city: string;
    address: string;
    status: string;
    description: string;
    floorId: string;
    floorName: string;
    buildingId: string;
    buildingName: string;
    imageUrls: string[];
    facilities: Facility[];
    operatingHours: OperatingHours | null;
    policies: Policy[];
    bookedList: BookedList[];
    createdAt: string;
    updatedAt: string;
};

export type Facility = {
    id: string;
    name: string;
};

export type OperatingHours = {
    id: string;
    startTime: string;
    endTime: string;
    description: string;
};

export type Policy = {
    id: string;
    title: string;
    description: string;
};

export type BookedList = {    
    id: string;
    bookingCode: string;
    bookingDate: string;
    startTime: string;
    endTime: string;
    status: string;
    userId: string;
    roomId: string;
}