'use strict';

const express = require('express');
const expenseController = require('./../controllers/expense.controller');

const expenseRouter = express.Router();

expenseRouter.get('/', expenseController.getAll);

expenseRouter.get('/:id', expenseController.getById);

expenseRouter.delete('/:id', expenseController.remove);

expenseRouter.post('/', expenseController.create);

expenseRouter.patch('/:id', expenseController.update);

module.exports = { expenseRouter };