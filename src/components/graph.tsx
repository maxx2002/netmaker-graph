import { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";

export default function GraphView() {
  // Specify the type of the ref as HTMLDivElement | null
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the ref is valid before creating the graph
    if (containerRef.current) {
      const nodes = new Array(9).fill(null).map((_, i) => ({
        id: i + 1,
        label: `Node ${i + 1}`,
        title: `node ${i + 1} tooltip text`,
        shape: ["box", "circle", "diamond", "star", "ellipse"][i % 5],
      }));

      const edges = [
        {
          from: 1,
          to: 1,
          smooth: { enabled: true, type: "curvedCW", roundness: 0.5 },
          arrows: {
            from: { enabled: true, type: "circle" },
            to: { enabled: true, type: "circle" },
          },
          shadow: true, // Apply shadow here
        },
        {
          from: 1,
          to: 7,
          arrows: {
            from: { enabled: true, type: "vee" },
            to: { enabled: true, type: "vee" },
          },
          shadow: true, // Apply shadow here
        },
        {
          from: 1,
          to: 3,
          arrows: { to: { enabled: true, type: "curve" } },
          shadow: true,
        },
        {
          from: 6,
          to: 5,
          color: { highlight: "#fff", opacity: 0.2 },
          shadow: true,
        },
        { from: 6, to: 2, shadow: true },
        { from: 7, to: 2, shadow: true },
        { from: 6, to: 7, shadow: true },
        { from: 6, to: 8, shadow: true },
        { from: 7, to: 8, shadow: true },
        { from: 8, to: 2, shadow: true },
        { from: 3, to: 7, shadow: true },
      ];

      const data = { nodes, edges };

      const options = {
        physics: { enabled: false },
        interaction: { navigationButtons: true },
        nodes: {
          borderWidth: 2,
          size: 40,
          color: { border: "#222222", background: "#666666" },
          font: { color: "yellow" },
        },
        edges: {
          color: "yellow",
          smooth: { enabled: true, type: "continuous", roundness: 0.5 }, // Apply smooth here
        },
        height: "900px",
      };

      const network = new Network(containerRef.current, data, options);

      // Cleanup network instance when the component unmounts
      return () => network.destroy();
    }
  }, []);

  return <div className="container" ref={containerRef}></div>;
}
