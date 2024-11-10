import express from "express";
import payload from "payload";
import { nextApp, nextHandler } from "./next-utils";
import { config } from "dotenv";
import cors from "cors"; // Asegúrate de que CORS esté instalado e importado

config(); // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000", // Permitir solicitudes desde este origen
      "http://localhost:3000/admin",
    ],
    credentials: true, // Permitir el uso de credenciales (opcional)
  })
);

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "250477maria",
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);

      // Log de colecciones disponibles
      console.log(
        "Available collections:",
        Object.keys(payload.collections || {})
      );
    },
  });

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: http://localhost:${PORT}`);
    });
  });
};

start();
