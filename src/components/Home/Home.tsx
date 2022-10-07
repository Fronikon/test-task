import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { ConstructorType } from '../../types/constructor';
import { getConstructors } from "../../api/constructors";
import { getWorkDocuments } from '../../api/documents';
import Form from './components/Form/index';
import { WorkDocumentType } from "../../types/workDocument";


export default function Home() {
  const [constructors, setConstructors] = useState<ConstructorType[]>([]);
  const [workDocuments, setWorkDocuments] = useState<WorkDocumentType[]>([]);

  useEffect(() => {
    ( async () => {
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
      <Form
        constructors={constructors}
        workDocuments={workDocuments}
      />
    </div>
  )
}
