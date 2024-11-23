### Netmaker Network Graph Visualization Project

## Overview

This project is a customized solution to visualize a network graph. It allows users to interact with the graph by dragging individual nodes, making it easier to explore and analyze the connections between them. Node sizes and colors are dynamically adjusted based on the number of connections (degree), providing an intuitive understanding of the graph structure.

## Features

- Draggable Nodes: Users can move nodes around to better understand the graph layout.
- Dynamic Node Styling: Node colors and sizes are determined by the number of connections, making it easier to identify highly connected nodes.
- - Interactive Design: Built with a clean UI using Tailwind CSS.
    Responsive Setup: The project is optimized for modern devices and browsers.

## Technologies Used

- React: A flexible JavaScript library for building user interfaces.
- Vite: A fast build tool and development server.
- TypeScript: For strong type checking and robust code structure.
- Tailwind CSS: For quickly styling the user interface.
- vis-network: A library specifically designed for creating interactive and customizable network visualizations.

## Approach

- Customization: The graph visualization is tailored for usability. By making nodes draggable and styling them dynamically based on the connection amount, users can quickly and visually comprehend complex relationships.
- Modern Tools: Using React, Vite, and TypeScript ensures the project is performant, maintainable, and developer-friendly.
- Library Integration: The vis-network library is used to efficiently handle graph rendering, while Tailwind CSS handles responsive and aesthetic UI elements.

## Setup and Installation

- Clone the GitHub repository to your local machine.
- Install the project dependencies using npm install.
- Download the provided API zip file, extract it, and navigate to the extracted folder.

## Running the Project

- Start the API server using npm start. Ensure the API is running on port 3001.
- Start the React application using npm run dev from the project folder.
- Open your browser and navigate to http://localhost:5173.
- Make sure the API server is running at http://localhost:3001.

# Ensure both the frontend (http://localhost:5173) and the API (http://localhost:3001) are running simultaneously. The frontend will fetch data from the API to render the graph.

