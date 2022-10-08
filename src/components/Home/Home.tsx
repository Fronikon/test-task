import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import { ConstructorType } from '../../types/constructor';
import { WorkDocumentType } from "../../types/workDocument";
import { setConstructorsFromApi } from "../../api/constructors";
import { setWorkDocumentsFromApi } from "../../api/documents";
import Form from './components/Form/index';
import Table from "./components/Table";

const Home: React.FC = () => {
  const [constructors, setConstructors] = useState<ConstructorType[]>([]);
  const [workDocuments, setWorkDocuments] = useState<WorkDocumentType[]>([]);

  useEffect(() => {
    setConstructorsFromApi(setConstructors);
    setWorkDocumentsFromApi(setWorkDocuments);
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="form" replace={true} />} />
        <Route path='form' element={
          <Form
            constructors={constructors}
            workDocuments={workDocuments}
            setWorkDocuments={setWorkDocuments}
          />
        } />
        <Route
          path='table'
          element={<Table workDocuments={workDocuments} />} />
      </Routes>
    </div>
  )
}

export default Home;
