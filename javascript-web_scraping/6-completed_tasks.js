#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2]; // Fetch API URL from command line argument

if (!apiUrl) {
  console.error('Error: API URL is missing');
  process.exit(1);
}

request(apiUrl, { json: true }, (err, res, body) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const completedTasks = body.filter(task => task.completed);

  const tasksCompletedByUser = {};

  completedTasks.forEach(task => {
    const userId = task.userId.toString();
    if (tasksCompletedByUser[userId]) {
      tasksCompletedByUser[userId]++;
    } else {
      tasksCompletedByUser[userId] = 1;
    }
  });


  const output = Object.keys(tasksCompletedByUser).reduce((acc, userId) => {
    acc[userId] = tasksCompletedByUser[userId];
    return acc;
  }, {});

  console.log(JSON.stringify(output));
});