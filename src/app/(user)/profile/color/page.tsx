"use client";

import React from 'react';

const ColorPalette = () => {
  const colors = {
    currentColors: [
      { name: 'Gray 800', code: '#1f2937' },
      { name: 'Teal 600', code: '#0d9488' },
    ],
    primaryPalette: [
      { name: 'Primary', code: '#0f766e' },
      { name: 'Dark', code: '#115e59' },
      { name: 'Light', code: '#14b8a6' },
      { name: 'Accent', code: '#99f6e4' },
    ],
    neutralColors: [
      { name: 'Text', code: '#1f2937' },
      { name: 'Headings', code: '#374151' },
      { name: 'Muted', code: '#9ca3af' },
      { name: 'Background', code: '#f3f4f6' },
    ],
    semanticColors: [
      { name: 'Success', code: '#22c55e' },
      { name: 'Error', code: '#ef4444' },
      { name: 'Warning', code: '#f59e0b' },
      { name: 'Info', code: '#3b82f6' },
    ],
  };

  const renderColorCard = (color: { name: string; code: string }) => (
    <div key={color.code} className="flex flex-col items-center">
      <div
        className="w-24 h-24 rounded-lg shadow-md"
        style={{ backgroundColor: color.code }}
      />
      <span className="mt-2 font-mono text-sm">{color.code}</span>
      <span className="text-sm text-gray-600">{color.name}</span>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Color Palette Analysis & Recommendations</h2>

      {/* Current Colors */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Current Colors</h3>
        <div className="flex gap-4 mb-4">
          {colors.currentColors.map(renderColorCard)}
        </div>
        <p className="text-gray-700">
          Kombinasi warna ini memberikan kesan profesional dan modern. Gray memberikan kesan formal,
          sementara Teal memberi aksen segar dan modern.
        </p>
      </section>

      {/* Recommended Primary Palette */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Recommended Primary Palette</h3>
        <div className="flex gap-4 flex-wrap mb-4">
          {colors.primaryPalette.map(renderColorCard)}
        </div>
      </section>

      {/* Neutral Colors */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Neutral Colors</h3>
        <div className="flex gap-4 flex-wrap mb-4">
          {colors.neutralColors.map(renderColorCard)}
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
        <div className="flex gap-4 flex-wrap mb-4">
          {colors.semanticColors.map(renderColorCard)}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Rekomendasi Penggunaan:</h3>
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
          <h4 className="font-semibold">1. Primary Action & Branding</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gunakan Teal (#0f766e) untuk primary buttons dan elemen utama</li>
            <li>Dark Teal (#115e59) untuk hover states</li>
            <li>Light Teal (#14b8a6) untuk secondary actions</li>
            <li>Accent Teal (#99f6e4) untuk highlights dan badges</li>
          </ul>

          <h4 className="font-semibold">2. Typography & Content</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gunakan Gray 800 (#1f2937) untuk body text</li>
            <li>Gray 700 (#374151) untuk headings</li>
            <li>Gray 400 (#9ca3af) untuk placeholder dan disabled text</li>
          </ul>

          <h4 className="font-semibold">3. Layout & Backgrounds</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gray 100 (#f3f4f6) untuk page backgrounds</li>
            <li>White (#ffffff) untuk card backgrounds</li>
          </ul>

          <h4 className="font-semibold">4. Status & Feedback</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Green (#22c55e) untuk success states dan confirmed bookings</li>
            <li>Red (#ef4444) untuk error states dan cancelled bookings</li>
            <li>Yellow (#f59e0b) untuk warnings dan pending states</li>
            <li>Blue (#3b82f6) untuk informational messages</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ColorPalette;
