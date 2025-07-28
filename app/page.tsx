console.log("🚀 HomePage loaded!");

'use client';

import { useState } from 'react';

export default function HomePage() {
  const [selectedBallast, setSelectedBallast] = useState('');

  const ballastOptions = [
    '',
    'Philips HF-P 236 TL-D',
    'Osram QTP5x14',
    'Tridonic PC 2/36 T8 PRO',
    'Vossloh Schwabe ELXc 136.538',
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">🔦 LEDtube Checker</h1>

      <p className="mb-6 text-lg max-w-xl">
        Selecteer het ballasttype dat in jouw armatuur zit. Wij tonen dan
        welke LED tubes hier compatibel mee zijn.
      </p>

      <div className="mb-6">
        <label htmlFor="ballast" className="block mb-2 font-medium">
          Kies een ballasttype:
        </label>
        <select
          id="ballast"
          value={selectedBallast}
          onChange={(e) => setSelectedBallast(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full max-w-md"
        >
          {ballastOptions.map((ballast, idx) => (
            <option key={idx} value={ballast}>
              {ballast === '' ? '-- Maak een keuze --' : ballast}
            </option>
          ))}
        </select>
      </div>

      {selectedBallast && (
        <div className="bg-white p-4 rounded shadow max-w-md">
          <h2 className="text-xl font-semibold mb-2">Compatibele LED tubes:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Noxion T8 HO 150cm 865</li>
            <li>Philips Master LEDtube 1200mm 14W</li>
            <li>Osram SubstiTUBE Advanced 600mm 8.3W</li>
          </ul>
          <p className="text-sm mt-3 text-gray-500">
            (Let op: bovenstaande lijst is voorbeelddata. We koppelen dit later aan de echte CSV.)
          </p>
        </div>
      )}
    </main>
  );
}
