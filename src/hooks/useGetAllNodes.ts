import { useEffect, useState } from "react";
import { Node } from "../types/Node";

export const useGetAllNodes = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNodes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3001/nodes");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Node[] = await response.json();
        setNodes(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNodes();
  }, []);

  return { nodes, loading, error };
};
