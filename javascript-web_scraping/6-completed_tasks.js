#!/usr/bin/node

const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }

  const completedTasks = body.filter(task => task.completed);

  const tasksCompletedByUser = {};

  completedTasks.forEach(task => {
    const userId = task.userId;
    if (tasksCompletedByUser[userId]) {
      tasksCompletedByUser[userId]++;
    } else {
      tasksCompletedByUser[userId] = 1;
    }
  });

  Object.keys(tasksCompletedByUser).forEach(userId => {
    console.log(`User ID ${userId}: ${tasksCompletedByUser[userId]} tasks completed`);
  });
});