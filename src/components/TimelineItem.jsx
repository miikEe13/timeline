import React, { useState, useRef } from 'react';

export default function TimelineItem({
  item,
  left,
  width,
  onRename,
  onDrag,
  containerRef,
  totalDuration,
}) {
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

  /* ---------- drag & drop ---------- */
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(0);

  const onPointerDown = (e) => {
    if (editing || e.button !== 0) return; // ignore if editing or not left‑click
    e.currentTarget.setPointerCapture(e.pointerId);
    startXRef.current = e.clientX;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const container = containerRef.current;
    if (!container) return;

    const deltaPx = e.clientX - startXRef.current;
    if (deltaPx === 0) return;

    const msPerPx = totalDuration / container.offsetWidth;
    const deltaMs = Math.round(deltaPx * msPerPx);

    onDrag(item.id, deltaMs);
    startXRef.current = e.clientX; // reset for smooth incremental drag
  };

  const onPointerUp = (e) => {
    if (!dragging) return;
    setDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const baseStyle = {
    left: `${left}%`,
    width: `${width}%`,
    top: '50%',
    transform: 'translateY(-50%)',
  };

  if (editing) {
    return (
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
        style={{ ...baseStyle, width: 'auto', zIndex: 100 }}
      />
    );
  }

  return (
    <div
      className={`absolute bg-blue-600/90 hover:bg-blue-700 text-white rounded-md
                  px-2 py-[2px] text-xs truncate shadow-sm select-none transition-colors
                  duration-150 ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      style={baseStyle}
      title={`${item.name}: ${item.start} → ${item.end}`}
      onDoubleClick={() => setEditing(true)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {item.name}
    </div>
  );
}
