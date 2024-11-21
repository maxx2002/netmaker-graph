declare module "react-vis-network-graph" {
  import { FC } from "react";

  interface NetworkProps {
    data: {
      nodes: Array<{ id: number | string; label?: string; [key: string]: any }>;
      edges: Array<{
        from: number | string;
        to: number | string;
        [key: string]: any;
      }>;
    };
    options?: any;
    getNetwork?: (network: any) => void;
    getEdges?: (edges: any) => void;
    getNodes?: (nodes: any) => void;
  }

  export const Network: FC<NetworkProps>;
}
