import { memo } from "react";
import styles from "./ButtonSubmit.module.css";

interface PropsType {
  isValid: boolean;
  isSubmitting: boolean;
}

export const ButtonSubmit: React.FC<PropsType> = memo(({ isValid, isSubmitting }) => {
  return (
    <input className={styles.button} type="submit" disabled={!isValid || isSubmitting} />
  )
})

export default ButtonSubmit;
