import "./index.css";
import Graph from "./components/graph";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  return (
    <div className="flex min-h-screen bg-neutral-900">
      <Sidebar />

      <div className="w-full text-white bg-neutral-900 lg:ml-56">
        <Header />
        <Graph />

        {/* <h1>Nodes</h1>
          <ul>
            {nodes.map((node) => (
              <li key={node.id}>
                <strong>{node.name}</strong> - {node.ip} ({node.os}) at{" "}
                {node.location}
                <ul>
                  <li>Traffic Direction: {node.trafficDirection}</li>
                  <li>Connected Nodes:</li>
                  <ul>
                    {node.connectedTo?.map((connectedNode, index) => (
                      <li key={index}>{connectedNode}</li>
                    ))}
                  </ul>
                </ul>
              </li>
            ))}
          </ul> */}
      </div>
    </div>
  );
}

export default App;
