import React from 'react';

export default function TimelineItem({ item, left, width }) {
  return (
    <div
    className="absolute bg-blue-600/90 hover:bg-blue-700 text-white rounded-md px-2 py-[2px] text-xs truncate shadow-sm transition-colors duration-150 cursor-pointer"
      style={{
        left: `${left}%`,
        width: `${width}%`,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      title={`${item.name}: ${item.start} → ${item.end}`}
    >
      {item.name}
    </div>
  );
}
