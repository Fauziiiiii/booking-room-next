// /* eslint-disable @typescript-eslint/no-explicit-any */
// // LocationDetails.js
// export function LocationDetails({ mapSrc, address }: any) {
//     return (
//       <div className="container-location">
//         <iframe src={mapSrc} className="map" loading="lazy"></iframe>
//         <div className="address">{address}</div>
//       </div>
//     );
//   }
  


import React from 'react'

export default function RoomLocation() {
  return (
    <div className="container-package w-full p-4"> 
      <div className="md:max-w-screen-xl md:px-4 mx-auto border-b border-gray-300 pb-4">
        <h2 className="text-xl font-semibold mb-4">Location</h2>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
          <div className="w-full h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37889.32874609485!2d106.89990111349987!3d-6.183765399999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4a89f8e595f%3A0x1cea17f70d586889!2sPT%20United%20Tractors%20Tbk!5e1!3m2!1sid!2sid!4v1731404269605!5m2!1sid!2sid"
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full bg-gray-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Detail Address</h3>
            <p className="text-sm text-gray-600">
              Jl. Jenderal Ahmad Yani No.Kav 49, RT.16/RW.9, Rawasari, Kec. Cemp. Putih,
              Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
