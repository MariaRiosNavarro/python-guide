export interface PaginatedDocs<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface PythonCard {
  id: string;
  title: string;
  description?: Array<{ children: Array<{ text: string }> }>; // Opcional
  category?: string; // Opcional
  codeExample?: string; // Opcional
}
