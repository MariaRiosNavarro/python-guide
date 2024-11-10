import payload from "payload";
import { PaginatedDocs, PythonCard } from "../types/payload-types";

export async function getPythonCards(): Promise<PythonCard[]> {
  try {
    const response = (await payload.find({
      collection: "python-cards",
      limit: 10,
    })) as unknown as PaginatedDocs<PythonCard>;

    return response.docs;
  } catch (error) {
    console.error("Error fetching Python cards:", error);
    return [];
  }
}
