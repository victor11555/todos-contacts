const express = require('express');

const app = express();

const useMiddleware = require('./middleware/index');

const useErrorHandlers = require('./middleware/error-handlers');

const todoRouter = require('./routes/todo');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');


useMiddleware(app);

app.use('/todos', todoRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);

useErrorHandlers(app);

module.exports = app;
