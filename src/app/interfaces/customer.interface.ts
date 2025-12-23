export interface CustomerResponse {
  id: string;
  name: string;
  lastName: string;
  numberDocument: string;
  typeDocument?: TypeDocument;
}

export interface TypeDocument {
  id: string;
  type: string;
}

export interface CustomerRequest {
  id?: string | null;
  name: string;
  lastName: string;
  numberDocument: string;
  typeDocument: TypeDocument;
}

