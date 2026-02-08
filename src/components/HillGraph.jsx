import { useRef, useEffect, useState } from "react";
import "../css/HillGraph.css";

function HillGraph({ progress = 0 }) {
  const activeRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, value: 0 });

  // Example sharp ups/downs data
  const dataPoints = [0, 30, 70, 50, 90, 40, 80, 60, 100];

  // SVG dimensions
  const width = 120;
  const height = 50;
  const step = width / (dataPoints.length - 1);

  // Build sharp line path
  let fullPath = `M0 ${height - (dataPoints[0] / 100) * height}`;
  dataPoints.forEach((point, i) => {
    if (i === 0) return;
    const x = step * i;
    const y = height - (point / 100) * height;
    fullPath += ` L${x} ${y}`;
  });

  useEffect(() => {
    if (activeRef.current) {
      const length = activeRef.current.getTotalLength();
      setPathLength(length);
      activeRef.current.style.strokeDasharray = length;
      activeRef.current.style.strokeDashoffset = length - (progress / 100) * length;
    }
  }, [progress]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100);

    setTooltip({
      visible: true,
      x: x,
      y: e.clientY - rect.top - 20,
      value: percent,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="hill-graph-container">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background line (gray) */}
        <path d={fullPath} className="hill-bg" />

        {/* Active progress line (green) */}
        <path ref={activeRef} d={fullPath} className="hill-active" />
      </svg>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.value.toFixed(0)}%
        </div>
      )}
    </div>
  );
}

export default HillGraph;
