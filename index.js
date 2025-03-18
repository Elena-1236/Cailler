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

app.get("/angebot", async function (req, res) {
  res.render("angebot", {});
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

/*
const unav1 = document.getElementById("unav1");
const linkunav1 = document.getElementById("link-unav1");

linkunav1.addEventListener("hover", () => {
  unav1.style.display = "flex";
});
*/

/* Wichtig! Diese Zeilen müssen immer am Schluss der Website stehen! */
app.listen(3010, () => {
  console.log(`Example app listening at http://localhost:3010`);
});
