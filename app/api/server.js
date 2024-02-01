const express = require ('express');
const port=4000;

app.get ('/auth', async (req, res) => {
  res.send("auth route")
});
app.listen(port)
