import { memo } from "react";
import styles from "./ButtonSubmit.module.css";

interface PropsType {
  isValid: boolean
}

export const ButtonSubmit: React.FC<PropsType> = memo(({ isValid }) => {
  return (
    <input className={styles.button} type="submit" disabled={!isValid} />
  )
})

export default ButtonSubmit
