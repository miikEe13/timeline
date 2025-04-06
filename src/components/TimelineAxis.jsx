import React from "react";

const generateDates = (min, max) => {
  const dates = [];

  const start = new Date(min.getFullYear(), min.getMonth(), 1);
  const end = new Date(max.getFullYear(), max.getMonth(), 1);

  for (let d = new Date(start); d <= end; d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) {
    dates.push(new Date(d));
  }

  // Add one extra month for UI visibility
  dates.push(new Date(end.getFullYear(), end.getMonth() + 1, 1));

  return dates;
};

export default function TimelineAxis({ minTime, maxTime }) {
  const minDate = new Date(minTime);
  const maxDate = new Date(maxTime);
  const totalDuration = maxTime - minTime;

  const dates = generateDates(minDate, maxDate);

  return (
    <div className="relative w-full h-6 mb-2">
      {dates.map((date, index) => {
        const positionPercent = ((date - minDate) / totalDuration) * 100;
        const isFirst = index === 0;
        const isLast = index === dates.length - 1;

        const leftStyle = isFirst
          ? "0%"
          : isLast
          ? "100%"
          : `${positionPercent}%`;

        const translateX = isFirst ? "0%" : isLast ? "-100%" : "-50%";

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center text-xs text-gray-600 whitespace-nowrap"
            style={{
              left: leftStyle,
              transform: `translateX(${translateX})`,
            }}
          >
            <span className="block border-l border-gray-300 h-2 mb-1"></span>
            <span>
              {date.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        );
      })}
    </div>
  );
}
