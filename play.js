
const connect = require("./client");



console.log("connecting...");
connect();

const bily = connect()
bily.on('connect', () => {
  console.log("Successfully connected to game server");
});