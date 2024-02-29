import { useContext, useEffect, useState } from "react";
import { websocketContext } from "../context/WebsocketContext";

type MessagePayload = {
content: string;
msg:string
}

const Websocket = () => {
    const [value,setValue] = useState('')
    const [message,setMessage] = useState<MessagePayload[]>([])
  const socket = useContext(websocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to gateway...");
    });
    socket.on("disconnect", () => {
        console.log("Disconnected from gateway...");
      });
  
      socket.on("error", (error) => {
        console.error("WebSocket error:", error);
      });
  
      socket.onAny((event, ...args) => {
        console.log(`Received event: ${event}`, args);
      });

    socket.on("onMessage", (data:MessagePayload) => {
      console.log("onMessage event recevied", data);
      setMessage((prev) => [...prev,data])
    });
    return () => {
      console.log("unregistering Events...");
      socket.off("connect");
      socket.off("onMessage");
    };
  }, []);
  const onSubmit=() => {
    socket.emit('newMessage', value )
    setValue('')
  }

  return (
    <div>
       <h1>Websocket Component</h1>
    <div>
      {message.length === 0 ? (
        <div>No Messages</div>
      ) : (
        <div>
          {message.map((item, i) => (
            <div key={i}>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <div>
      <input type="text" value = {value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={onSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default Websocket;
