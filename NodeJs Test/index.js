const noble = require('noble');

// Replace these with your specific UUIDs
const serviceUUID = 'userid';
const characteristicUUID = 'aa8888aa';

noble.on('stateChange', (state) => {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', (peripheral) => {
  if (peripheral.advertisement.localName === 'YourDeviceName') {
    noble.stopScanning();

    peripheral.connect((err) => {
      if (!err) {
        console.log('Connected to device');
        peripheral.discoverServices([], (err, services) => {
          services.forEach((service) => {
            if (service.uuid === serviceUUID) {
              service.discoverCharacteristics([], (err, characteristics) => {
                characteristics.forEach((characteristic) => {
                  if (characteristic.uuid === characteristicUUID) {
                    // Listen for incoming data
                    characteristic.on('data', (data, isNotification) => {
                      console.log('Received data:', data.toString('utf-8'));
                    });

                    // Enable notifications
                    characteristic.subscribe((err) => {
                      if (!err) {
                        console.log('Subscribed for notifications');
                      }
                    });
                  }
                });
              });
            }
          });
        });
      }
    });
  }
});
