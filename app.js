// Obtain configured instance.
let terminal = new BluetoothTerminal();

// Override `receive` method to handle incoming data as you want.
terminal.receive = function (data) {
  alert(data);
};

// Request the device for connection and get its name after successful connection.
terminal.connect().then(() => {
  alert(terminal.getDeviceName() + ' is connected!');
});

// Send something to the connected device.
terminal.send('Simon says: Hello, world!');

// Disconnect from the connected device.
terminal.disconnect();

// 