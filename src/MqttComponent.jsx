import React, { useEffect } from 'react';
// import {mqtt} from 'mqtt';
export default function MqttComponent(props) {

    const savedAddress = '127.0.0.1';
    const savedPort = '';
  
    // const [form] = Form.useForm();
    const [address, setAddress] = React.useState(savedAddress);
    const [port, setPort] = React.useState(savedPort);
    const [publish, setPublish] = React.useState(undefined);
    const [received, setReceived] = React.useState(undefined);
    const [error, setError] = React.useState(undefined);
  
    const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18, } };
    const buttonItemLayout = { wrapperCol: { span: 14, offset: 4 } };
  
    const onFinish = (data) => {
      setAddress(data.ip);
      setPort(data.port);
      localStorage.setItem('rubenchoi-mqtt-address', data.ip);
      localStorage.setItem('rubenchoi-mqtt-port', data.port);
    };
    useEffect(() => {
        const handleMessage = (topic, payload) => {
          let decodedPayload = new Buffer.from(payload, 'base64').toString('utf-8');
          setReceived("[" + topic + "] " + decodedPayload);
          props.callbacks.onMessage(topic, decodedPayload);
        }
    
        const handleError = (err) => {
          setError(err);
          props.callbacks.onConnect(false);
        }
    
        const connect = () => {
          try {
            const url = 'ws://' + address + ':' + port;
            const mqtt = require('mqtt');
            const mqttHandler = mqtt.connect(url);
            mqttHandler.on('connect', () => {
              props.subscribeTo.forEach(topic => {
                mqttHandler.subscribe(topic);
              })
            //   g_var.mqtt = mqttHandler;
              props.callbacks.onConnect(true);
            });
            mqttHandler.on('disconnect', () => handleError('MQTT Disconnected'));
            mqttHandler.on('error', (err) => handleError(err));
            mqttHandler.on('message', handleMessage);
            console.log(`커넥트 성공`);
          } catch (err) {
            handleError(err);
            console.log(`커넥트 에러${err}`);
          }
        }
    
        connect();
      }, [])
  

    return (
        <div>
            
        </div>
    );
}
