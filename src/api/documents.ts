import { BASE_URL } from "../data/api"
import { WorkDocumentType } from '../types/workDocument';

export const getWorkDocuments = async (): Promise<Response> => {
  return await fetch(`${BASE_URL}/documents`);
}

interface BodyType {
  name: string;
  constructors: number[];
}

export const updateWorkDocument = async (workDocument: WorkDocumentType): Promise<Response> => {
  const body: BodyType = {
    name: workDocument.name,
    constructors: [...workDocument.constructors]
  }

  return await fetch(`${BASE_URL}/documents/${workDocument.id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const createWorkDocument = async (body: BodyType): Promise<Response> => {
  return await fetch(`${BASE_URL}/documents`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

export const setWorkDocumentsFromApi = async (setWorkDocuments: React.Dispatch<React.SetStateAction<WorkDocumentType[]>>) => {
  const workDocumentsRes = await getWorkDocuments()
  if (workDocumentsRes.ok) {
    const documentsData = await workDocumentsRes.json()
    setWorkDocuments([...documentsData])
  }
}