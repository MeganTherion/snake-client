const net = require("net");

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  conn.on('connect', () => {
    // setTimeout(() => conn.write("Move: up"), 50);
    // setTimeout(() => conn.write("Move: left"), 100);
    // conn.write("Move: up");
    // conn.write("Move: left");
    conn.write("Name: 420")
  
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });
//interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};


module.exports = connect;
  