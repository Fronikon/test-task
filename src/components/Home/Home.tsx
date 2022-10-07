import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import styles from "./Home.module.css";
import { ConstructorType } from '../../types/constructor';
import { WorkDocumentType } from "../../types/workDocument";
import { getConstructors } from "../../api/constructors";
import { getWorkDocuments } from '../../api/documents';
import Form from './components/Form/index';
import Table from "./components/Table";


export default function Home() {
  const [constructors, setConstructors] = useState<ConstructorType[]>([]);
  const [workDocuments, setWorkDocuments] = useState<WorkDocumentType[]>([]);

  useEffect(() => {
    (async () => {
      const costructorsRes = await getConstructors()
      if (costructorsRes.ok) {
        const constructorsData = await costructorsRes.json()
        setConstructors([...constructorsData])
      }

      const workDocumentsRes = await getWorkDocuments()
      if (workDocumentsRes.ok) {
        const documentsData = await workDocumentsRes.json()
        setWorkDocuments([...documentsData])
      }
    })()
  }, [])

  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Navigate to="form" replace={true} />}/>
        <Route path='form' element={
          <Form
            constructors={constructors}
            workDocuments={workDocuments}
          />
        } />
        <Route path='table' element={
          <Table
            workDocuments={workDocuments}
          />
        } />
      </Routes>
    </div>
  )
}
