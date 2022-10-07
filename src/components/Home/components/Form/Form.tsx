import { FormEvent, useEffect, useState } from "react";
import styles from "./Form.module.css";
import { ConstructorType } from './../../../../types/constructor';
import InputName from './components/InputName/index';
import Select from './components/Select/index';
import ButtonSubmit from './components/ButtonSubmit/index';
import { WorkDocumentType } from "../../../../types/workDocument";
import { createWorkDocument, updateWorkDocument } from "../../../../api/documents";

interface PropsType {
  constructors: ConstructorType[];
  workDocuments: WorkDocumentType[];
}

export const Form: React.FC<PropsType> = ({constructors, workDocuments}) => {
  const [selectValue, setSelectValue] = useState<number | null>(null);
  const [inputNameValue, setInputNameValue] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if(constructors[0]) {
      setSelectValue(constructors[0].id)
    }
  }, [constructors])

  useEffect(() => {
    setIsValid(!isError)
  }, [isError])

  useEffect(() => {
    setIsValid(inputNameValue.length > 0)
  }, [inputNameValue])

  useEffect(() => {
    if (isError) {
      setIsError(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputNameValue, selectValue])

  const onSubmit = (e: FormEvent): void => {
    if (selectValue !== null) {
      const workDocument = workDocuments.find((workDocument) => {
        return workDocument.name === inputNameValue
      })

      if (workDocument) {
        if (workDocument.constructors.includes(selectValue)) {
          setIsError(true)
        } else {
          updateWorkDocument({...workDocument, constructors: [...workDocument.constructors, selectValue]})
        }
      } else {
        createWorkDocument({
          name: inputNameValue,
          constructors: [selectValue]
        })
      }
    }

    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <Select
          constructors={constructors}
          value={selectValue}
          setValue={setSelectValue}
        />
        <InputName
          value={inputNameValue}
          setValue={setInputNameValue}
        />
        {isError && <p>Вы уже отправляли заявку на этот документ, она уже была учтена</p>}
        <ButtonSubmit
          isValid={isValid}
        />
      </form>
    </div>
  )
}

export default Form
