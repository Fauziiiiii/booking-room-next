// import { getByIdFloor } from "@/services/floor/actions/get-by-id-floor";
// import { getAllRoom } from "./get-all-user";

// export const getRoomsByFloorId = async () => {
//   try {
//     const rooms = await getAllRoom();
//     const roomsWithFloor = await Promise.all(
//         rooms.map(async (room) => {
//             const floor = await getByIdFloor(room.floorId);
//             return {
//             ...room,
//             floorName: floor?.name || "Unknown Floor",
//             };
//         })
//     );
//     return roomsWithFloor;
//   } catch (err) {
//     throw err
//   }
// };
