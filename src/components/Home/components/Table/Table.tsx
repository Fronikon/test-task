import styles from "./Table.module.css";
import { WorkDocumentType } from "../../../../types/workDocument";

interface PropsType {
  workDocuments: WorkDocumentType[];
}

export const Table: React.FC<PropsType> = ({ workDocuments }) => {
  const sortedWorkDocuments = [...workDocuments].sort((a, b) => b.constructors.length - a.constructors.length);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Наименование документа</th>
            <th>Количество заявок</th>
          </tr>
        </thead>
        <tbody>
          {sortedWorkDocuments.map((workDocument) => {
            return (
              <tr key={workDocument.id}>
                <td>{workDocument.name}</td>
                <td>{workDocument.constructors.length}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;
