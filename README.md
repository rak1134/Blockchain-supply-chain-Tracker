# Blockchain Food tracker
![WhatsApp Image 2024-10-24 at 15 53 04_1ca77364](https://github.com/user-attachments/assets/b3ecc518-fb4e-4dbe-bf63-75e1caf49a68)

 This project is a blockchain-powered food supply chain tracking system with integrated AR visualization. It allows users to log food items on the blockchain, track their origins and statuses, and visualize their journey through augmented reality (AR). This solution aims to enhance transparency in food supply chains and engage users with AR technology for better data visualization.

Key Features
Blockchain Integration: Food items are logged on a blockchain to ensure immutable tracking of their origins and statuses throughout the supply chain.
QR Code Generation: Each food item is assigned a unique QR code for easy scanning and retrieval of its blockchain-stored data.
Augmented Reality (AR) Visualization: Users can visualize the supply chain journey of a food item through AR technology using AR.js and A-Frame.
Frontend: A modern, responsive UI built with HTML, CSS, and JavaScript to interact with the blockchain and view AR data.

Backend Implementation
Smart Contract: We use Solidity to write a smart contract that stores information like food name, origin, and status on the blockchain. The contract is deployed on a test network (e.g., Rinkeby or Goerli).
Web3.js Integration: The frontend uses Web3.js to connect with the Ethereum blockchain via MetaMask. Users can add new food items, which are recorded in the blockchain.
Data Storage: Food item details are stored as blockchain transactions, ensuring a tamper-proof record of the supply chain's key events.

Blockchain Connection
MetaMask Integration: The project connects to the Ethereum network via MetaMask. Upon connecting, users can interact with the blockchain to add or retrieve food item data.
Smart Contract Interaction: The smart contract is used to log and query food item details. Data is written to the blockchain when new items are added, and existing data is retrieved for display on the frontend.

AR Feature Implementation
QR Code Scanning: Each food item is assigned a QR code, which can be scanned to retrieve blockchain data.
AR.js & A-Frame: For AR visualization, AR.js and A-Frame are used to create augmented reality experiences. Users can view a 3D representation of the food's supply chain journey using their camera, overlayed with key data points.
AR Visualization: Once the QR code is scanned, the AR feature is triggered, allowing users to see a visual representation of the food's journey, such as its source farm, distribution centers, and current status.

How to Run the Project
Clone the repository.
Ensure MetaMask is installed in your browser and connected to the Ethereum test network.
Open the project in VS Code and install the Live Server extension.
Right-click index.html and select "Open with Live Server" to run the frontend.
Interact with the blockchain through MetaMask to log and view food items.
Scan QR codes and view food item details in AR.
