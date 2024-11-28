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
