const amqp = require("amqplib");


connect()

async function connect() {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();
    const result = await channel.assertQueue("jobs");
    channel.consume("jobs", message => {
      const msg =   JSON.parse(message.content.toString());
      console.log(msg)
      if(msg.number == 7)
      channel.ack(message);
    })
    console.log("^^^Waiting for the messages...^^^")

} catch (err) {
    console.log(err);
  }
}
 