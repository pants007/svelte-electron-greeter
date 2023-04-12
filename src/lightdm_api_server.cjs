const express = require('express');
const cors = require('cors');
const ldm = require('./lightdm_bridge.cjs');
const app = express();
const PORT = 3002;

app.use(cors());

app.get('/api/shutdown', (req, res) => {
  console.log("hello")
  ldm.shutdown()
})

app.get('/api/restart', (req, res) => {
  ldm.restart()
})
app.get('/api/suspend', (req, res) => {
  ldm.suspend()
})
app.get('/api/users', (req, res) => {
  const users = ldm.getUsers();
  res.json({ data: users });
});
app.get('/api/sessions', (req, res) => {
  const sessions = ldm.getSessions();
  res.json({ data: sessions });

});

app.listen(PORT, () => {
  console.log('Server is listening on port', PORT)
})