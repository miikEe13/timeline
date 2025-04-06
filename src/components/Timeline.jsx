import React, { useState } from 'react';
import { assignLanes } from '../utils/assignLanes';
import timelineItems from '../data/timelineItems';
import TimelineItem from './TimelineItem';
import TimelineAxis from './TimelineAxis';

const getTimelineRange = (items) => {
  const starts = items.map((item) => new Date(item.start).getTime());
  const ends = items.map((item) => new Date(item.end).getTime());
  return [Math.min(...starts), Math.max(...ends)];
};

export default function Timeline() {
    const lanes = assignLanes(timelineItems);
    const [minTime, maxTime] = getTimelineRange(timelineItems);


  const totalDuration = maxTime - minTime;

  const calculatePosition = (date) => {
    return ((new Date(date).getTime() - minTime) / totalDuration) * 100;
  };

  const calculateWidth = (start, end) => {
    return ((new Date(end).getTime() - new Date(start).getTime()) / totalDuration) * 100;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Timeline lanes</h2>

      <div className="overflow-x-auto border border-gray-300 rounded p-4">
        <div className="relative min-w-[1200px] pr-16">
          <TimelineAxis minTime={minTime} maxTime={maxTime} />

          {lanes.map((lane, laneIndex) => (
            <div key={laneIndex} className="relative h-10 mb-2 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
              {lane.map((item) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  left={calculatePosition(item.start)}
                  width={calculateWidth(item.start, item.end)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
