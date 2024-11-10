import express from "express";
import payload from "payload";
import { nextApp, nextHandler } from "./next-utils";
import { config } from "dotenv";

config(); // En lugar de require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "YOUR-SECRET-KEY",
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
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
