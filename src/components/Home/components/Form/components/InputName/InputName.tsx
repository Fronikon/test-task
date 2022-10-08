import { ChangeEvent, memo } from "react";
import styles from "./InputName.module.css";

interface PropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const InputName: React.FC<PropsType> = memo(({ value, setValue }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <div>
      <label
        className={styles.label}
        htmlFor="inputName"
      >
      Название документа:
      </label>
      <input
        id="inputName"
        className={styles.input}
        onChange={onChange}
        value={value}
        placeholder='Введите текст'
        type="text"
      />
    </div>
  )
})

export default InputName;
