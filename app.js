const express = require("express");
const authService = require("./src/services/authService");
const AuthCallbackService = require("./src/services/authCallbackService");

const config = require("./src/config");

const app = express();

app.get("/", (req, res) => {
  const auth = authService.redirectUri();
  res.redirect(auth);
});

app.get("/oauth-github-callback", (req, res) => {
  return AuthCallbackService.callback(req, res);
});

app.listen(process.env.PORT);
console.log(`App listening on http://localhost:${process.env.PORT}`);
