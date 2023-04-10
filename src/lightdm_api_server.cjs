const express = require('express');
const cors = require('cors');
const { getUsers, getSessions } = require('./lightdm_bridge.cjs');
const app = express();
const PORT = 3002;

app.use(cors());

app.get('/api/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});
app.get('/api/sessions', (req, res) => {
  const sessions = getSessions();
  console.log(sessions)
  res.json(sessions);

});

app.listen(PORT, () => {
  console.log('Server is listening on port', PORT)
})