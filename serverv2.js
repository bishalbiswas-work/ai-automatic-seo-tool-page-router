const express = require("express");
const greenlockExpress = require("greenlock-express");
// const GreenlockManager = require("@greenlock/manager-express.js");

// Initialize the Express app
const app = express();

app.use(express.static(path.join(__dirname, "./client/build")));

// Your Express routes
app.post("/", (req, res) => {
  res.send("Hello, secure world!");
});

app.post("/install-ssl", async (req, res) => {
  // Extract domain from request
  const domain = req.body.domain;

  // Logic to add the domain to Greenlock for SSL management
  // Note: This part may vary based on your setup and needs
  try {
    await greenlock.manager.add({
      subject: domain,
      altnames: [domain],
    });
    res.status(200).send(`SSL setup initiated for ${domain}`);
  } catch (err) {
    res.status(500).send(`Error setting up SSL: ${err.message}`);
  }
});

// // Create Greenlock Manager
// const greenlock = GreenlockManager.create({
//   packageAgent: "my-app/1.0.0",
//   maintainerEmail: "your-email@example.com",
//   packageRoot: __dirname,

//   // Get the config from a safe place
//   configDir: "./greenlock.d",

//   // Whether or not to run at cloudscale
//   cluster: false,
// });

// // Create Greenlock-express app
// const greenlockApp = greenlockExpress.create({
//   greenlock: greenlock,

//   // Serves on 80 and 443
//   // Get's SSL certificates magically!
//   server: "https://acme-v02.api.letsencrypt.org/directory",
//   app: app,
// });

// ================================================================
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

// Start the Greenlock express app
greenlockExpress
  .init({
    packageRoot: __dirname,
    configDir: "./greenlock.d",
    maintainerEmail: "your-email@example.com",
    cluster: false,
  })
  .serve(app);

// // Start servers
// greenlockApp.listen(80, 443);

// console.log("Server running. Navigate to https://your-domain.com");
