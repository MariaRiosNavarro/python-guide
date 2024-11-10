import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";
import { pythonCards } from "./collections/PythonCards";
import { Users } from "./collections/Users";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    bundler: webpackBundler(),
    user: "users", // Aquí referenciamos la colección de usuarios
  },
  collections: [
    Users, // Añadimos la colección de usuarios
    pythonCards,
  ],
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
});
