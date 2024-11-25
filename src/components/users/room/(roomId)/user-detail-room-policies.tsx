// import { Clock3, FileText } from 'lucide-react'
// import React from 'react'

// export default function RoomPolicies() {
//     return (
//         <div className="container-policies w-full p-4">
//             <div className="md:max-w-screen-xl md:px-4 mx-auto">
//                 <h2 className="text-xl font-semibold mb-6">Terms & Conditions </h2>

//                 {/* Operational Hours */}
//                 <div className="mb-8">
//                 <div className="flex items-center gap-2 mb-4">
//                     <Clock3 size={24} className="text-gray-700" />
//                     <h3 className="text-lg font-semibold">Operating Hours</h3>
//                 </div>
//                 <div className="ml-9">
//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                         <p className="text-sm text-gray-500">Waktu Penggunaan Mulai</p>
//                         <p className="text-base font-medium">06:00 - 21:00</p>
//                     </div>
//                     <div>
//                         <p className="text-sm text-gray-500">Waktu Penggunaan Berakhir</p>
//                         <p className="text-base font-medium">21:00</p>
//                     </div>
//                     </div>
//                     <p className="text-sm text-gray-600 mb-2">
//                     Penggunaan di luar jam operasional memerlukan persetujuan dan mungkin dikenakan biaya tambahan.
//                     </p>
//                     <p className="text-sm text-gray-600 mb-2">
//                     Pengguna harus melapor jika ada perubahan jadwal atau waktu kedatangan untuk menghindari masalah pemakaian ruangan.
//                     </p>
//                     <button className="text-blue-600 text-sm hover:underline">
//                     Selengkapnya
//                     </button>
//                 </div>
//                 </div>

//                 {/* Other Policies */}
//                 <div className="mb-8">
//                 <div className="flex items-center gap-2 mb-4">
//                     <FileText size={24} className="text-gray-700" />
//                     <h3 className="text-lg font-semibold">More Policies</h3>
//                 </div>
//                 <div className="ml-9 space-y-6">
                    
//                     {/* Cancellation Policy */}
//                     <div>
//                     <h4 className="font-medium mb-2">Kebijakan Pembatalan</h4>
//                     <p className="text-sm text-gray-600 mb-1">
//                         Pembatalan pemakaian ruangan harus dilakukan minimal 24 jam sebelum waktu penggunaan untuk menghindari biaya pembatalan.
//                     </p>
//                     <p className="text-sm text-gray-600">
//                         Pembatalan dalam waktu kurang dari 24 jam akan dikenakan biaya sebesar 50% dari biaya sewa.
//                     </p>
//                     </div>

//                     {/* Cleanliness Policy */}
//                     <div>
//                     <h4 className="font-medium mb-2">Kebersihan dan Kerapihan</h4>
//                     <p className="text-sm text-gray-600">
//                         Pengguna wajib menjaga kebersihan dan kerapihan ruangan selama dan setelah penggunaan. Harap buang sampah pada tempat yang disediakan.
//                     </p>
//                     </div>

//                     {/* No Smoking Policy */}
//                     <div>
//                     <h4 className="font-medium mb-2">Larangan Merokok</h4>
//                     <p className="text-sm text-gray-600">
//                         Merokok dilarang di dalam ruangan. Pengguna yang melanggar kebijakan ini akan dikenakan denda sesuai ketentuan pengelola.
//                     </p>
//                     </div>

//                     {/* Security and Safety Policy */}
//                     <div>
//                     <h4 className="font-medium mb-2">Keamanan dan Keselamatan</h4>
//                     <p className="text-sm text-gray-600">
//                         Pengguna bertanggung jawab atas keamanan barang pribadi mereka. Dalam keadaan darurat, ikuti petunjuk evakuasi yang tertera di ruangan.
//                     </p>
//                     </div>

//                     {/* Usage Capacity Policy */}
//                     <div>
//                     <h4 className="font-medium mb-2">Kapasitas Penggunaan</h4>
//                     <p className="text-sm text-gray-600">
//                         Jumlah pengguna tidak boleh melebihi kapasitas ruangan yang telah ditentukan. Penambahan kapasitas harus disetujui terlebih dahulu.
//                     </p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


'use client';

import { OperatingHours, Policy } from '@/types/roomQuery';
import { Clock3, FileText } from 'lucide-react';
import React from 'react';


interface RoomPoliciesProps {
  operatingHours: OperatingHours | null;
  policies: Policy[];
}

export default function RoomPolicies({
  operatingHours,
  policies,
}: RoomPoliciesProps) {
  return (
    <div className="container-policies w-full p-4">
      <div className="md:max-w-screen-xl md:px-4 mx-auto">
        <h2 className="text-xl font-semibold mb-6">Terms & Conditions </h2>

        {/* Operational Hours */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock3 size={24} className="text-gray-700" />
            <h3 className="text-lg font-semibold">Operating Hours</h3>
          </div>
          <div className="ml-9">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Waktu Penggunaan Mulai</p>
                <p className="text-base font-medium">
                  {new Date(operatingHours?.startTime ?? "").toLocaleTimeString(
                    'id-ID',
                    { hour: '2-digit', minute: '2-digit' }
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Waktu Penggunaan Berakhir</p>
                <p className="text-base font-medium">
                  {new Date(operatingHours?.endTime ?? "").toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              {operatingHours?.description}
            </p>
            <button className="text-blue-600 text-sm hover:underline">
              Selengkapnya
            </button>
          </div>
        </div>

        {/* Other Policies */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={24} className="text-gray-700" />
            <h3 className="text-lg font-semibold">More Policies</h3>
          </div>
          <div className="ml-9 space-y-6">
            {policies.map((policy) => (
              <div key={policy.id}>
                <h4 className="font-medium mb-2">{policy.title}</h4>
                <p className="text-sm text-gray-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
