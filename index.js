import { createApp } from "./config.js";

const app = createApp({
  user: "autumn_star_7622",
  host: "168.119.168.41",
  database: "demo",
  password: "uaioysdfjoysfdf",
  port: 18324,
});

/* Startseite. */
app.get("/", async function (req, res) {
  res.render("start", {});
});

app.get("/besuch", async function (req, res) {
  res.render("besuch", {});
});

app.get("/erlebnisse", async function (req, res) {
  res.render("erlebnisse", {});
});

app.get("/shop", async function (req, res) {
  res.render("shop", {});
});

app.get("/ueberuns", async function (req, res) {
  res.render("ueberuns", {});
});

app.get("/news", async function (req, res) {
  res.render("news", {});
});

app.get("/newsartikel", async function (req, res) {
  res.render("newsartikel", {});
});

app.get("/escapegame", async function (req, res) {
  res.render("escapegame", {});
});

app.get("/produkt", async function (req, res) {
  res.render("produkt", {});
});

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
