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

  // Filter tasks that are completed
  const completedTasks = body.filter(task => task.completed);

  // Initialize an object to count tasks completed by each user ID
  const tasksCompletedByUser = {};

  // Count tasks completed by each user
  completedTasks.forEach(task => {
    const userId = task.userId.toString(); // Convert userId to string for consistent key format
    if (tasksCompletedByUser[userId]) {
      tasksCompletedByUser[userId]++;
    } else {
      tasksCompletedByUser[userId] = 1;
    }
  });

  // Prepare the output in the specified format
  const output = {};
  Object.keys(tasksCompletedByUser).forEach(userId => {
    output[`'${userId}'`] = tasksCompletedByUser[userId];
  });

  console.log(JSON.stringify(output));
});