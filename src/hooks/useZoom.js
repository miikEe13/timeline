import { useState, useCallback } from "react";

/**
 * Simple zoom hook.
 * @param {number} min  Lowest allowed zoom (default 0.25 = 25 %)
 * @param {number} max  Highest allowed zoom (default 4 = 400 %)
 * @param {number} step Multiplicative step (default 1.25 = +25 %)
 */
export default function useZoom({ min = 0.25, max = 4, step = 1.25 } = {}) {
  const [zoom, setZoom] = useState(1);

  const zoomIn = useCallback(
    () => setZoom((z) => Math.min(z * step, max)),
    [max, step]
  );

  const zoomOut = useCallback(
    () => setZoom((z) => Math.max(z / step, min)),
    [min, step]
  );

  const resetZoom = useCallback(() => setZoom(1), []);

  return { zoom, zoomIn, zoomOut, resetZoom };
}
