
function connect() {
  const mqtt = require('mqtt');
  const client = mqtt.connect('mqtt://127.0.0.1/');
  console.log('connected1');

  console.log('connected2');
  client.publish('wonhee', 'Hello mqtt')
  console.log(`퍼블리싱`);
  

  client.subscribe('wonhee', function (err) {
  console.log(`섭스크라이브`);
    // if (!err) {
    //   client.publish('presence', 'Hello mqtt')
    // }
    }
    
  )
  client.on('message', function (topic, message) {
    let note = message.toString();
    // Updates React state with message 
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log(topic);
    console.log(note);
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    // client.end();
    });
  // const handleMessage = (topic, payload) => {
  
  // }
  // client.on('message', handleMessage);
//   client.on('connect', function () {
//     console.log('connected');
//     client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('presence', 'Hello mqtt')
//     }
//     }
//     )
// }
// )


  
}
// function onon(connect,msg) {
//   client.on('message', function (connect, msg) {
//     // message is Buffer
//     console.log(msg.toString())
//     client.end()
//   })
// }
module.exports = connect;
// module.exports = onon;