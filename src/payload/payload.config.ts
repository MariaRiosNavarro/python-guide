import { Users } from "./collections/Users";
import { PythonCards } from "./collections/PythonCards";

import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";

export default buildConfig({
  collections: [Users, PythonCards],

  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",

  admin: {
    bundler: webpackBundler(),
    user: "users", // Aquí referenciamos la colección de usuarios
  },

  typescript: {
    outputFile: path.resolve(__dirname, "../types/payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost/python-guide",
  }),
  editor: slateEditor({}),
  upload: {
    disableLocalStorage: true,
    disableImageSizes: true,
  },

  // Añade esta sección de onInit
  onInit: (payload) => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    console.log(
      "Available collections after init:",
      Object.keys(payload.collections || {})
    );
  },
});
