function scanButtonListener() {
    const scanButton = document.getElementById('scanButton');
    const deviceList = document.getElementById('deviceList');

    scanButton.addEventListener('click', async () => {
        deviceList.innerHTML = ''; // Clear previous results

        try {
            const device = await navigator.bluetooth.requestDevice({
                acceptAllDevices: true
            });

            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${device.name || 'Unknown'}, ID: ${device.id}`;
            deviceList.appendChild(listItem);
        } catch (error) {
            console.error('Error scanning for devices:', error);
            alert('Could not find devices. Please try again.');
        }
    });
}

scanButtonListener();