export type Node = {
  id: number;
  name: string;
  ip: string;
  location: string;
  os: string;
  trafficDirection: string;
  connectedTo: number[];
};
