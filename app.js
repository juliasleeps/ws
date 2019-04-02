// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// // Вызовется при соединении пользователя
// io.on('connection', function (socket) {
//     console.log('A user connected');

//     // Отправка сообщения через промужуток времени
//     setTimeout(() => {
//         socket.send('Sent a message 2 seconds after connection');
//         console.log('message sent');
//     }, 2000);
//     // Вызовется при отсоединении пользователя
//     socket.on('disconnect', function () {
//         console.log('A user disconnected');
//     });
// });

// http.listen(3000, function () {
//     console.log('Server on http://localhost:3000')
// })

// Родные события: connect, nessage, disconnect, reconnect, ping, join, leave


// Свои события

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//     console.log('A user connected');

//     // Отправка своего события и объекта
//     setTimeout(() => {
//         socket.emit('myEvent', { description: 'User event from server' });
//     }, 2000);
//     // Вызовется при отсоединении пользователя
//     socket.on('disconnect', function () {
//         console.log('A user disconnected');
//     });
// });

// http.listen(3000, function () {
//     console.log('Server on http://localhost:3000')
// })


// 5. Получени событий о клиента

// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function (socket) {
//     socket.on('clientEvent', (data) => console.log(data));
// });

// http.listen(3000, function () {
//     console.log('Server on http://localhost:3000')
// });

// 6 Широковещание -посыл событий всем подключенным клиентам

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

var users = 0;

io.on('connection', function (socket) {
    users++;
    socket.broadcast.emit('broadcast', { description: users + ' users connected!' })
    socket.on('disconnect', () => {
        users--;
        socket.broadcast.emit('broadcast', { description: users + ' users disconnected!' })
    });
});

http.listen(3000, function () {
    console.log('Server on http://localhost:3000')
});
