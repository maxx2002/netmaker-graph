import React, { useEffect, useRef, useState } from "react";
import { Network, Node, Edge } from "vis-network/standalone";
import "vis-network/styles/vis-network.css";
import { useGetAllNodes } from "../hooks/useGetAllNodes";
import { MdAdd, MdRemove } from "react-icons/md";

const Graph: React.FC = () => {
  const { nodes, loading, error } = useGetAllNodes();
  const containerRef = useRef<HTMLDivElement>(null);
  const networkInstance = useRef<Network | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (loading || error || !nodes || !containerRef.current) return;

    // Prepare nodes and edges data for vis-network
    const visNodes: Node[] = nodes.map((node) => ({
      id: node.id,
      label: node.name,
      size: 20 + node.connectedTo.length * 3,
      shape: "dot",
      color: {
        border: "#a682ff",
        background: "#684cf4",
      },
      font: {
        size: 14,
        color: "#f0f0f0",
        bold: "bold",
      },
      title: `Name: ${node.name}
          IP: ${node.ip}
          Location: ${node.location}
          OS: ${node.os}`,
    }));

    const visEdges: Edge[] = [];
    nodes.forEach((node) => {
      node.connectedTo.forEach((connectedNodeId) => {
        visEdges.push({
          from: node.id,
          to: connectedNodeId,
          arrows: { to: { enabled: true, scaleFactor: 0.8 } },
          color: { color: "#888" },
        });
      });
    });

    // Initialize the network
    const network = new Network(
      containerRef.current,
      { nodes: visNodes, edges: visEdges },
      {
        nodes: {
          borderWidth: 0,
          shape: "dot",
          physics: false,
        },
        edges: {
          width: 1,
          arrows: { to: { enabled: true, scaleFactor: 2 } },
        },
        interaction: {
          tooltipDelay: 0,
          hover: true,
          dragNodes: true,
          dragView: true,
          zoomView: true,
        },
        physics: {
          enabled: false,
        },
        layout: {
          improvedLayout: true,
        },
      }
    );

    networkInstance.current = network;

    return () => {
      network.destroy();
    };
  }, [nodes, loading, error]);

  useEffect(() => {
    if (!networkInstance.current || !nodes) return;

    if (searchQuery) {
      const matchedNode = nodes?.find(
        (node) => node.name.toLowerCase() === searchQuery.toLowerCase()
      );

      if (matchedNode) {
        // Highlight the matched node
        networkInstance.current.selectNodes([matchedNode.id]);
        networkInstance.current.focus(matchedNode.id, {
          animation: {
            duration: 300,
            easingFunction: "easeInOutQuad",
          },
        });
      } else {
        // Reset highlights when search is cleared
        networkInstance.current.setOptions({
          nodes: {
            color: {
              background: "#684cf4",
            },
          },
        });
        networkInstance.current.selectNodes([]); // Deselect all nodes
      }
    }
  }, [searchQuery, nodes]);

  const handleZoomIn = () => {
    if (networkInstance.current) {
      const scale = networkInstance.current.getScale();
      networkInstance.current.moveTo({
        scale: scale + 0.2,
        animation: {
          duration: 300,
          easingFunction: "easeInOutQuad",
        },
      });
    }
  };

  const handleZoomOut = () => {
    if (networkInstance.current) {
      const scale = networkInstance.current.getScale();
      networkInstance.current.moveTo({
        scale: scale - 0.2,
        animation: {
          duration: 300,
          easingFunction: "easeInOutQuad",
        },
      });
    }
  };

  if (loading)
    return (
      <div className="flex justify-center w-full mt-12">
        <div className="w-12 h-12 border-2 border-t-2 border-solid rounded-full border-neutral-400 border-t-primary animate-spin" />
      </div>
    );

  if (error)
    return (
      <p className="flex justify-center w-full mt-12">
        Error: Unable to load nodes.
      </p>
    );

  return (
    <div className="relative w-full h-[80vh]">
      <div className="absolute top-0 left-0 z-10 flex flex-col items-start p-4 text-black md:left-2 md:top-2 lg:top-2 lg:left-4 gap-y-3">
        {/* Search input */}
        <input
          type="text"
          className="p-2 border rounded-md"
          placeholder="Search nodes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Zoom In/Out container */}
        <div className="flex flex-col items-center bg-white rounded-md">
          {/* Zoom In Button */}
          <button
            onClick={handleZoomIn}
            className="p-2 text-black transition hover:bg-neutral-300 rounded-t-md"
          >
            <MdAdd size={20} />
          </button>

          {/* Zoom Out Button */}
          <button
            onClick={handleZoomOut}
            className="p-2 text-black transition hover:bg-neutral-300 rounded-b-md"
          >
            <MdRemove size={20} />
          </button>
        </div>
      </div>

      {/* Graph */}
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default Graph;
