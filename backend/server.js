// Express importieren (Webframework f+r Node.js)
const express = require("express");

// App initialisieren
const app = express();

//Port aus Umgebungsvariable lesen (wichtig für Docker/Cloud)
//Fallback auf 3000 für lokale Entwicklung
const PORT = process.env.PORT || 3000;

//Version aus Env (nützlich für Debugging/Deployments)
const APP_VERSION = process.env.APP_VERSION || "1.0.0";

// Middleware: JSON Body Parsing aktivieren
app.use(express.json());

// Middleware: Logging für alle Anfragen
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next(); // Wichtig: gibt die Anfrage an die nächste Funktion weiter
});

// Haupt-Endpunkt für Statusabfrage
app.get("/api/status", (req, res) => {
  res.json({
    status: "ok",                        // einfacher Statusindikator
    message: "App is running",           // Info-Text
    version: APP_VERSION,                // App-Version aus Env
    timestamp: new Date().toISOString(), // aktueller Zeitstempel
    uptime: process.uptime()             // Laufzeit des Prozesses in Sekunden
  });
});

// Health-Check Endpoint (für Docker/Monitoring)
app.get("/health", (req, res) => {
  res.status(200).json({ health: "up" });
});

// Fallback für nicht existierende Routen (404-Fehler)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});