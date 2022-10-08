import { ChangeEvent, memo } from 'react';
import styles from "./Select.module.css";
import { ConstructorType } from "../../../../../../types/constructor";

interface PropsType {
  constructors: ConstructorType[];
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Select: React.FC<PropsType> = memo(({ constructors, value, setValue }) => {
  const onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setValue(Number(e.target.value));
  }

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="selectConstructor">Выбор конструктора:</label>
      <select id='selectConstructor' className={styles.select} onChange={onChange} value={value || 'none'} name="constructors">
        {constructors.map(({ id, name }) => {
          return (<option key={id} value={id}>{name}</option>)
        })}
      </select>
    </div>
  )
})

export default Select;
