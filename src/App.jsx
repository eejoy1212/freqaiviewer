//  import logo from './logo.svg';
// import { connect } from 'mqtt';
import { Fragment, useEffect, useState } from 'react';
import './App.css';
import AppBar from './AppBar';
import Contents from './Contents';
import MqttComponent from './MqttComponent';
// import connect from './testmqtt';

// var mqtt    = require('mqtt');
const mqtt = require('mqtt');
var options = {
	// protocol: 'mqtts',
  protocol: 'mqtts',
	// clientId uniquely identifies client
	// choose any string you wish
	// clientId: 'b0908853' 	
  // clientId: '1212' 
};
// var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);
// var client  = mqtt.connect('mqtt://localhost:8081', options);
// var client  = mqtt.connect('mqtt://127.0.0.1:1883',options);



// preciouschicken.com is the MQTT topic
// client.publish('wonhee')
// client.subscribe('preciouschicken.com');
// const client = mqtt.connect('mqtt://127.0.0.1');
// client.subscribe('wonhee');
export default  function App() {
  // connect();
  const [menuOpen,setMenuOpen]=useState(false);
  var note;
  

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em>nothing heard</em></Fragment>);
  const handleMqtt=()=>{
    console.log('connected1');
  // const client = mqtt.connect('mqtt://127.0.0.1');
  //  var client  = mqtt.connect('mqtt://127.0.0.1:1883',options);
  const client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);
  console.log('connected2');

  client.on('connect', function () {
    console.log('connected3');
    client.subscribe('wonhee', function (err) {
    if (!err) {
      client.publish('wonhee', 'Hello mqtt')
    }
    })
})

  client.on('message', function (topic, message) {
    note = message.toString();
    // Updates React state with message 
    setMesg(note);
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    console.log(topic);
    console.log(note);
    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
    // client.end();
    });
  }
  // const [data, setData] = useState(undefined);
  // const [counter, setCounter] = useState(1);
  // const [connected, setConnected] = useState('Connected');

  // const publish = () => {
  //   const date = new Date();
  //   const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  //   const s = "TestData-" + (counter) + " ---- " + time;
  //   setData({ topic: 'TOPIC1', payload: s });
  //   setCounter(counter + 1);
  //   console.log(counter);
  // }
  // connect();
  return (
    <div className="App">
     <header className="App-header">
    <h1>A taste of MQTT in React</h1>
    <p>The message is: {mesg}</p>
    <button type="" onClick={handleMqtt}>connect</button>
		{/* <p>
		<a href="https://www.preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/"    
		style={{
			color: 'white'
		}}>preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/</a>
		</p> */}
		</header>
{/* 
      <AppBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Contents menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      
      
      
    </div>
  );
}

