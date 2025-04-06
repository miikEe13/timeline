import React, { useState } from 'react';

export default function TimelineItem({ item, left, width, onRename }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(item.name);

  const save = () => {
    const trimmed = value.trim();
    if (trimmed && trimmed !== item.name) onRename(item.id, trimmed);
    setEditing(false);
  };

  const cancel = () => {
    setValue(item.name);
    setEditing(false);
  };

  return editing ? (
    <input
      type="text"
      value={value}
      autoFocus
      onChange={(e) => setValue(e.target.value)}
      onBlur={save}
      onKeyDown={(e) => {
        if (e.key === 'Enter') save();
        if (e.key === 'Escape') cancel();
      }}
      className="absolute bg-white text-black rounded-md px-1 text-xs shadow-sm border border-gray-300"
      style={{
        left: `${left}%`,
        width: `auto`,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
      }}
    />
  ) : (
    <div
      className="absolute bg-blue-600/90 hover:bg-blue-700 text-white rounded-md px-2 py-[2px] text-xs truncate shadow-sm cursor-pointer transition-colors duration-150"
      style={{
        left: `${left}%`,
        width: `${width}%`,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
      title={`${item.name}: ${item.start} → ${item.end}`}
      onDoubleClick={() => setEditing(true)}
    >
      {item.name}
    </div>
  );
}
