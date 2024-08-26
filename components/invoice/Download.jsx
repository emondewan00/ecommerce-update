"use client";

import generatePDF from "react-to-pdf";

const getTargetElement = () => document.getElementById("invoice");

const Download = () => {
  const downloadPDF = () => {
    const options = {
      filename: "invoice.pdf",
      page: {
        margin: 20,
        format: "A4",
      },
    };
    generatePDF(getTargetElement, options);
  };
  return (
    <div className="mt-6 flex justify-end gap-x-3">
      <button
        onClick={downloadPDF}
        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
      >
        <svg
          className="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Invoice PDF
      </button>
    </div>
  );
};

export default Download;
