import React from "react";

export default function ZoomControls({ zoomIn, zoomOut, resetZoom }) {
  return (
    <div className="flex gap-2 mb-3">
      <button
        onClick={zoomOut}
        className="px-4 py-1 bg-gray-200 rounded font-medium cursor-pointer"
      >
        −
      </button>
      <button
        onClick={zoomIn}
        className="px-4 py-1 bg-gray-200 rounded font-medium cursor-pointer"
      >
        ＋
      </button>
      <button onClick={resetZoom} className="px-4 py-1 bg-gray-200 rounded cursor-pointer">
        Reset Zoom
      </button>
    </div>
  );
}
