import { BASE_URL } from "../data/api"
import { ConstructorType } from './../types/constructor';

export const getConstructors = async (): Promise<Response> => {
  return await fetch(`${BASE_URL}/constructors`);
}

export const setConstructorsFromApi = async (setConstructors: React.Dispatch<React.SetStateAction<ConstructorType[]>>): Promise<void> => {
  const costructorsRes = await getConstructors();
  if (costructorsRes.ok) {
    const constructorsData = await costructorsRes.json();
    setConstructors([...constructorsData]);
  }
}