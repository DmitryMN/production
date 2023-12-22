const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');
const middlewares = jsonServer.defaults();

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(middlewares);
server.use(jsonServer.bodyParser);

//имитация задержки
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

server.use((req, res, next) => {
    console.log('module auth')
    if (!req.headers.authorization) {
        return res.status(403).json({
            message: 'Auth Error'
        });
    }
    next();
});

// эндпоинт для логина
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username);
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8'));
    const { users } = db;

    const userFromId = users.find((user) => {
        return user.username === username && user.password === password
    });

    if(userFromId) {
        return res.json(userFromId)
    }

    return res.status(403).json({ message: 'Auth Error'})

});

server.use(router);

server.listen(8000, () => {
    console.log('server is running on 8000 port');
});