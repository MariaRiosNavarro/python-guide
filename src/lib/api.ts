import payload from "payload";
import { PaginatedDocs, PythonCard } from "../types/payload-types";

// Añade esta línea para inicializar Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || "YOUR-SECRET-KEY",
});

export async function getPythonCards(): Promise<PythonCard[]> {
  try {
    console.log("Payload instance:", payload);
    console.log("Payload collections:", payload.collections);

    // Intenta acceder directamente a la colección
    const collection = payload.collections["python-cards"];
    console.log("Collection details:", collection);


    const response = (await payload.find({
      collection: "python-cards",
      limit: 10,
    })) as unknown as PaginatedDocs<PythonCard>;

    console.log("Response:", response);
    return response.docs;
  } catch (error) {
    console.error("Detailed error fetching Python cards:", error);

    return [];
  }
}
