// Sample blockchain connection (you will need to integrate actual blockchain functions here)
if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    ethereum.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        document.getElementById('blockchainConnection').textContent = `Connected (Account: ${accounts[0]})`;
      })
      .catch(err => {
        document.getElementById('blockchainConnection').textContent = 'Failed to Connect';
        console.error(err);
      });
  } else {
    document.getElementById('blockchainConnection').textContent = 'MetaMask Not Installed';
  }
  
  // Listen for form submission
  document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const foodName = document.getElementById('name').value;
    const origin = document.getElementById('origin').value;
    const status = document.getElementById('status').value;
  
    // Add the new food item to the table
    addFoodItem(foodName, origin, status);
  
    // Reset the form
    document.getElementById('foodForm').reset();
  });
  
  // Function to add a food item to the table
  function addFoodItem(name, origin, status) {
    const tableBody = document.getElementById('foodTable').getElementsByTagName('tbody')[0];
  
    // Create a new row
    const newRow = tableBody.insertRow();
  
    // Create cells for the name, origin, status, QR code, and AR view
    const nameCell = newRow.insertCell(0);
    const originCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);
    const qrCodeCell = newRow.insertCell(3);
    const arViewCell = newRow.insertCell(4);
  
    // Set the cell values
    nameCell.textContent = name;
    originCell.textContent = origin;
    statusCell.textContent = status;
  
    // Create the QR code and append it to the cell
    const qrCode = document.createElement('img');
    const qrCodeValue = `Name: ${name}, Origin: ${origin}, Status: ${status}`;
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeValue)}&size=100x100`;
    qrCode.alt = "QR Code";
    qrCode.classList.add('qr-code');
    qrCodeCell.appendChild(qrCode);
  
    // Add AR placeholder
    const arButton = document.createElement('button');
    arButton.textContent = "View in AR";
    arButton.onclick = function() {
      alert(`AR View for ${name} not implemented yet!`);
    };
    arViewCell.appendChild(arButton);
  }
  