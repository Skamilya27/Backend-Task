import express from "express";
import fs from "fs";
import path from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const messagesFilePath = path.join(process.cwd(), 'messages.txt');

function readMessagesFromFile() {
  try {
      const data = fs.readFileSync(messagesFilePath, 'utf8');
      return data.split('\n').filter(message => message.trim() !== '');
  } catch (err) {
      console.error("Error reading messages from file:", err);
      return [];
  }
}


function writeMessageToFile(message) {
  try {
      fs.appendFileSync(messagesFilePath, message + '\n');
  } catch (err) {
      console.error("Error writing message to file:", err);
  }
}


app.get('/', (req, res) => {
  const messages = readMessagesFromFile();
  res.send(`
      <form method="post" action="/">
          <input type="text" name="message" placeholder="Enter your message">
          <button type="submit">Submit</button>
      </form>
      <div>
          <h2>Messages:</h2>
          ${messages.map(message => `<p>${message}</p>`).join('')}
      </div>
  `);
});

app.post('/', (req, res) => {
  const message = req.body.message;
  if (message) {
      writeMessageToFile(message);
  }
  res.redirect('/');
});


app.listen(4000, () => {
  console.log("App is listening at http://localhost:4000");
});
