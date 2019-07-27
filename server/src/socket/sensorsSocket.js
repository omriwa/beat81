const io = require('socket.io');

const initSensorSocket = server => {
    const sensorSocket = io.listen(server);

    sensorSocket.on('sensors', socket => {
        socket.on('sesnsorUpdate', sensors => {
            socket.emit('sesnsorUpdate', sensors);
        })
    });

    return sensorSocket;
}

module.exports = { initSensorSocket };