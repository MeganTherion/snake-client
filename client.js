const net = require("net");
const { IP, PORT, NAME} = require("./constants");

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
 
    conn.write(`Name: ${NAME}`);
  
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });
  //interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};


module.exports = connect;
  